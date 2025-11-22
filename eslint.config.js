import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    rules: {
      "semi": "error",
      "prefer-const": "error",
      "indent": ["error", 2], 
      "quotes": ["warn", "single"],
      "object-curly-spacing": ["error", "always"],
      "space-before-blocks": ["error", "always"],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "no-unused-vars": ["warn"],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "curly": ["error", "all"],
      "no-undef": "error",
    },
    languageOptions: { globals: globals.node } },
]);
