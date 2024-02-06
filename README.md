# React + TypeScript + Vite Admin Dashboard Template 🚀

## Introduction

Welcome to our Admin Dashboard Template powered by React, TypeScript, and Vite! This template provides a robust yet minimal setup to kickstart your admin interface development journey. With hot module replacement (HMR) and ESLint rules baked in, you'll be up and running in no time!

## Features

- **Fast Refresh**: Enjoy seamless updates with Fast Refresh powered by either [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) using Babel or [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) using SWC.
- **Type-aware ESLint Rules**: Elevate your code quality with type-aware lint rules for enhanced productivity and maintainability.
- **Customizable Configuration**: Easily tailor the ESLint configuration to your project's needs with simple steps outlined below.

## Expanding the ESLint Configuration

For production-grade applications, follow these steps to enhance the ESLint configuration:

1. Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- ![Screenshot 2024-02-05 020440](https://github.com/Framework12/Admin-Dashboard/assets/74595185/15fb7cb4-71d1-437b-9923-75eb423c9ebf)
