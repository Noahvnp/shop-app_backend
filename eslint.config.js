// eslint.config.js
import eslint from "@eslint/js";
import globals from "globals";
import pluginImport from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules/", "dist/", "build/", ".env", "*.config.js", "migrations/", "seeders/"],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Core rules
      "no-console": "warn",
      "import/extensions": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next|req|res|options" }],

      // Sequelize specific
      "no-underscore-dangle": [
        "error",
        {
          allow: [
            "_id",
            "_attributes",
            "_schema",
            "_model",
            "_dao",
            "_includes",
            "_creationAttributes",
          ],
        },
      ],

      // Express specific
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: ["req", "res", "transaction"],
        },
      ],

      // Import rules
      "import/order": [
        "error",
        {
          "newlines-between": "ignore",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".json"],
          moduleDirectory: ["node_modules", "src/"],
        },
      },
    },
  },
  prettierConfig,
];
