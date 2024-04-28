// module.exports = {
//   '**/src/**/*.{js,jsx,ts,tsx,json}': [
//     'prettier --write app packages',
//     'eslint \'app/src/**/*.{ts,tsx}\' \'packages/*/src/**/*.{ts,tsx}\' --fix',
//     () => 'tsc --noEmit', // показывает ошибки но в терминале нет ссылки на файл с ошибкой
//   ],
//   '**/src/**/*.{css,scss}': ['pnpm lint:style'],
// };
module.exports = {
  '**/*.{js,jsx,ts,tsx,json}': [
    'pnpm pretty',
    'pnpm lint:code',
    () => 'pnpm type-check'
  ],
  '**/*.{css,scss}': ['pnpm lint:style'],
};
