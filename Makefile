# include .env

install: ## ✨ Install pnpm required packages
	pnpm install --frozen-lockfile

start: ## ✨ Start localhost project
	pnpm dev

pretty: ## Clean code style
	pnpm pretty

style: ## Clean styles
	pnpm style

type-check: ## Check types
	pnpm type-check

build: ## Build project
	pnpm build
