import eslintRecommended from "eslint/conf/eslint-recommended";

export default [
  eslintRecommended,
  {
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
  }
];
