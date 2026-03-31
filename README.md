# @philiprehberger/typed-router

[![CI](https://github.com/philiprehberger/typed-router/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/typed-router/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/typed-router.svg)](https://www.npmjs.com/package/@philiprehberger/typed-router)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/typed-router)](https://github.com/philiprehberger/typed-router/commits/main)

Framework-agnostic typed URL routing with path parameter extraction

## Installation

```bash
npm install @philiprehberger/typed-router
```

## Usage

```ts
import { createRouter } from '@philiprehberger/typed-router';

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

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/typed-router)

🐛 [Report issues](https://github.com/philiprehberger/typed-router/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/typed-router/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
