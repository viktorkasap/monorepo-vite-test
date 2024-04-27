# include .env

install: ## ✨ Install pnpm required packages
	pnpm install --frozen-lockfile

start: ## ✨ Start localhost project
	pnpm dev

pretty: ## Clean code style
	pnpm pretty

build: ## Build project
	pnpm build
