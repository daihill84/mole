import nextPlugin from 'eslint-config-next';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default [
  ...nextPlugin,
  ...tailwindPlugin,
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'tailwindcss/classnames-order': 'warn',
    },
  },
];