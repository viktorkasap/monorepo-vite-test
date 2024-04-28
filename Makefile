install: ## ✨ Install pnpm required packages
	pnpm install --frozen-lockfile

start: ## ✨ Start localhost project
	pnpm dev

pretty: ## ✨ Clean code style
	pnpm pretty

lint-style: ## ✨ Clean styles
	pnpm lint:style

lint-code: ## ✨ Check code
	pnpm lint:code

type-check: ## ✨ Check types
	pnpm type-check

test-all: ## ✨ Testing
	pnpm test:all

build: ## ✨ Build project
	pnpm build
