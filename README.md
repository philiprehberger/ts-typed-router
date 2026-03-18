# @philiprehberger/ts-typed-router

[![CI](https://github.com/philiprehberger/ts-typed-router/actions/workflows/publish.yml/badge.svg)](https://github.com/philiprehberger/ts-typed-router/actions/workflows/publish.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-typed-router.svg)](https://www.npmjs.com/package/@philiprehberger/ts-typed-router)
[![License](https://img.shields.io/github/license/philiprehberger/ts-typed-router)](LICENSE)

Framework-agnostic typed URL routing with path parameter extraction

## Installation

```bash
npm install @philiprehberger/ts-typed-router
```

## Usage

```ts
import { createRouter } from '@philiprehberger/ts-typed-router';

const router = createRouter();

router.add('GET', '/users', () => listUsers());
router.add('GET', '/users/:id', (params) => getUser(params.id));
router.add('POST', '/users', () => createUser());
router.add('PUT', '/users/:id/roles/:role', (params) => setRole(params.id, params.role));

const match = router.match('GET', '/users/123');
if (match) {
  match.params; // { id: '123' }
  match.handler(match.params);
}

router.routes(); // list all registered routes
```

## API

| Export | Description |
|--------|-------------|
| `createRouter()` | Create a new router instance |

### `Router`

| Method | Description |
|--------|-------------|
| `add(method, path, handler)` | Register a route with `:param` placeholders |
| `match(method, url)` | Find matching route, returns `{ handler, params }` or `null` |
| `routes()` | List all registered routes |


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
