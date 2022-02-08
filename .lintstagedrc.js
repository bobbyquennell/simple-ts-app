module.exports = {
  '**/*.{js?(x),ts?(x)}': () => 'npm run lint:fix',
  '**/*.ts?(x)': () => 'npm run ts-check',
}
