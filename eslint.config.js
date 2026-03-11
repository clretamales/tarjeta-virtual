export default {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      window: "readonly",
      document: "readonly"
    }
  },
  rules: {
    "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: true }],
    "no-console": "error",
    "prefer-const": ["warn"]
  }
};
