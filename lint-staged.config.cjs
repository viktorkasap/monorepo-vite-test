module.exports = {
  '**/src/**/*.{js,jsx,ts,tsx}': [
    'prettier --write app packages',
    () => 'tsc --noEmit', // показывает ошибки но в терминале нет ссылки на файл с ошибкой
    'eslint --fix src',
  ],
  '**/src/**/*.{css,scss}': ['pnpm pretty'],
  '*.html': ['pnpm pretty'],
};
