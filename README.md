# CLI

- [`npx create-turbo@latest -e with-vite`](https://github.com/vercel/turborepo/tree/main/examples/with-vite)

```sh
? Where would you like to create your Turborepo? .
? Which package manager do you want to use? npm

>>> Creating a new Turborepo with:

Application packages
 - apps/docs
 - apps/web
Library packages
 - packages/eslint-config
 - packages/typescript-config
 - packages/ui

>>> Success! Your new Turborepo is ready.

To get started:
- Enable Remote Caching (recommended): npx turbo login
   - Learn more: https://turbo.build/repo/remote-cache

- Run commands with Turborepo:
   - npm run build: Build all apps and packages
   - npm run dev: Develop all apps and packages
   - npm run lint: Lint all apps and packages
- Run a command twice to hit cache
```

- Run `docs` app in [dev](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#filtering-by-package-name) mode `npx turbo dev --filter=docs`

# Docs

- Initial Turbo's [`README`](initial-readme.md) file.
