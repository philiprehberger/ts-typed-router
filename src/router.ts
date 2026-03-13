import type { HttpMethod, Route, RouteHandler, RouteMatch, Router } from './types.js';

function compilePath(path: string): { pattern: RegExp; paramNames: string[] } {
  const paramNames: string[] = [];
  const regexStr = path
    .replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    })
    .replace(/\*/g, '(.*)');

  return {
    pattern: new RegExp(`^${regexStr}$`),
    paramNames,
  };
}

export function createRouter(): Router {
  const routeList: Route[] = [];

  function add<P extends Record<string, string> = Record<string, string>>(
    method: HttpMethod,
    path: string,
    handler: RouteHandler<P>,
  ): void {
    const { pattern, paramNames } = compilePath(path);
    routeList.push({
      method,
      path,
      pattern,
      paramNames,
      handler: handler as RouteHandler,
    });
  }

  function match(method: HttpMethod, url: string): RouteMatch | null {
    const [pathname] = url.split('?');

    for (const route of routeList) {
      if (route.method !== method) continue;

      const m = pathname.match(route.pattern);
      if (m) {
        const params: Record<string, string> = {};
        for (let i = 0; i < route.paramNames.length; i++) {
          params[route.paramNames[i]] = decodeURIComponent(m[i + 1]);
        }
        return { handler: route.handler, params };
      }
    }

    return null;
  }

  function routes(): Route[] {
    return [...routeList];
  }

  return { add, match, routes };
}
