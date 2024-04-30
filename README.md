# Monorepo PNPM + Vite + React + TypeScript

> 👉 [Article Ref](https://dev.to/lico/react-monorepo-setup-tutorial-with-pnpm-and-vite-react-project-ui-utils-5705?signin=true)

> 💡 In this version `style.css` is built in a separate file, so it should be connected separately as a single set of styles for the whole ui.

### Includes:

- React
- TypeScript
- ESLint
- Prettier
- Stylelint
- PostCSS
- Makefile
- Husky
- LintStaged

## Pnpm
**Using PowerShell:**
```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```
**On POSIX systems**
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```
or
```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```
**Using a standalone script**
```bash
npm install -g pnpm
```

## 1. Install


```bash
make install
```

or

```bash
pnpm install
```

## 2. Run server

```bash
make start
```

or

```bash
pnpm dev
```

## 3. Build

```bash
make build
```

or

```bash
pnpm build
```

### Makefile for Windows

[Manual](https://jcutrer.com/windows/install-chocolatey-choco-windows10)

1. Click Start and type `powershell`
2. Right-click Windows Powershell and choose `Run as Administrator`
3. Paste the following command into Powershell and press enter.

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; `
  iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

4. Answer `Yes` when prompted
5. Close and reopen an elevated PowerShell window to start using `choco`
6. PowerShell 👉 `choco install make`
