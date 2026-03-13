export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';

export interface RouteMatch<P = Record<string, string>> {
  handler: RouteHandler<P>;
  params: P;
}

export type RouteHandler<P = Record<string, string>> = (params: P) => unknown;

export interface Route {
  method: HttpMethod;
  path: string;
  pattern: RegExp;
  paramNames: string[];
  handler: RouteHandler;
}

export interface Router {
  add<P extends Record<string, string> = Record<string, string>>(
    method: HttpMethod,
    path: string,
    handler: RouteHandler<P>,
  ): void;
  match(method: HttpMethod, url: string): RouteMatch | null;
  routes(): Route[];
}
