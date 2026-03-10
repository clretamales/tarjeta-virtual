export default {
  root: true,
  env: {
    browser: true,
    es2024: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    "no-console": "error",
    "prefer-const": ["warn"]
  }
};
