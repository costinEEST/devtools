# CLI

- Create a monorepo using a [Vite](https://github.com/vercel/turborepo/tree/main/examples/with-vite) template and `npm` as package manager: `npx create-turbo@latest -e with-vite`
- Run `docs` app in [dev](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#filtering-by-package-name) mode: `npx turbo dev --filter=docs`
- Monorepo's [tree](https://turbo.build/repo/docs/reference/ls) structure: `npx turbo ls`
- Install a dependency in a [specific](https://turbo.build/repo/docs/crafting-your-repository/managing-dependencies#using-your-package-manager) package: `npm install vitest --workspace packages/fetch-to-curl` 

# Docs

- Initial Turbo's [`README`](initial-readme.md) file.
