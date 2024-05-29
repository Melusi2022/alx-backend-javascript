module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    // Possible Errors
    "no-console": "warn", // Warns about console.log statements
    "no-debugger": "error", // Disallows debugger statements

    // Best Practices
    "eqeqeq": ["error", "always"], // Enforces strict equality
    "curly": ["error", "all"], // Requires curly braces for all control statements
    "no-eval": "error", // Disallows the use of eval()

    // Variables
    "no-unused-vars": ["warn", { "args": "none" }], // Warns about unused variables
    "no-undef": "error", // Disallows the use of undeclared variables

    // Style
    "indent": ["error", 2], // Enforces a consistent indentation level of 2 spaces
    "quotes": ["error", "single"], // Enforces the use of single quotes
    "semi": ["error", "always"], // Requires semicolons at the end of statements
    "comma-dangle": ["error", "never"], // Disallows trailing commas
    "object-curly-spacing": ["error", "always"], // Requires spacing inside curly braces

    // ES6
    "arrow-spacing": ["error", { "before": true, "after": true }], // Enforces spacing around arrow function arrow
    "no-var": "error", // Disallows var declarations, use let or const instead
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": true
    }], // Suggests using const when variables are not reassigned
    "no-duplicate-imports": "error", // Disallows duplicate imports

    // Node.js and CommonJS
    "no-new-require": "error", // Disallows new require
    "no-path-concat": "error" // Disallows string concatenation with __dirname and __filename
  }
};
