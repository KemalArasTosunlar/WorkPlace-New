import { defineConfig } from 'eslint-define-config';
import react from 'eslint-plugin-react';

export default defineConfig({
  languageOptions: {
    globals: {
      browser: true,
      es2021: true,
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: {
    react,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    // Add more rules as needed
  },
});
