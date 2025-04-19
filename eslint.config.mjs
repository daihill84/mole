import globals from 'globals';
import nextPlugin from 'eslint-config-next';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default [
  // Apply Next.js recommended config
  ...nextPlugin.configs['recommended'].flat,
  // Apply Tailwind CSS recommended config
  ...tailwindPlugin.configs.recommended,
  // Define global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Custom rules for .js and .jsx files
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'tailwindcss/classnames-order': 'warn',
    },
  },
];
