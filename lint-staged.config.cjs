module.exports = {
  '**/*.{js,jsx,ts,tsx,json}': [
    'pnpm pretty',
    'pnpm lint:code',
    () => 'pnpm type-check'
  ],
  '**/*.{css,scss}': ['pnpm lint:style'],
};
