module.exports = {
   root: true,
   env: {
      browser: true,
      es2021: true,
      node: true
   },
   extends: [
      'eslint:recommended', 
      'plugin:react/recommended', 
      'plugin:react-hooks/recommended', 
      'plugin:react/jsx-runtime'
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', 'react-hooks'],
   settings: {
      react: {
         'version': 'detect',
      },
      // 'meta.hasSuggestions': true
   },
   rules: {
      'no-unused-vars': 0,
      'react/prop-types': 0,
      indent: ['error', 3],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'linebreak-style': ['error', 'unix'],
      'react-hooks/exhaustive-deps': ['warn']
   }
}
