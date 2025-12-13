import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";

// Resolve current file & directory (needed for FlatCompat)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for legacy config compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname,

  // Required so "eslint:recommended" works in Flat Config
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // --------------------------------------------------
  // Base configurations
  // --------------------------------------------------

  // Next.js core rules + TypeScript rules
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ),

  // --------------------------------------------------
  // Global settings
  // --------------------------------------------------
  {
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".svg"],
        },
      },
    },
  },

  // --------------------------------------------------
  // Custom rules
  // --------------------------------------------------
  {
    rules: {
      "no-console": "error",
      // Enforce unused variable checks (JS only)
      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          caughtErrors: "all",
        },
      ],

      "no-undef": "error",
      "consistent-return": "error",
      "object-shorthand": "error",
      curly: ["error", "multi-line"],
      "no-else-return": "error",
      "prefer-const": "error",
      eqeqeq: "error",
      "no-unsafe-optional-chaining": "error",
      "no-nested-ternary": "warn",
      "arrow-body-style": ["error", "as-needed"],
      "prefer-template": "error",
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "default-param-last": "error",
      "no-return-await": "warn",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "array-callback-return": "error",
      "prefer-arrow-callback": ["error", { allowUnboundThis: true }],
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "no-var": "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],

      // ==============================
      // Prettier integration
      // ==============================

      // Treat Prettier issues as ESLint errors
      "prettier/prettier": "error",

      // ==============================
      // TypeScript-specific overrides
      // ==============================

      // Disable TS unused-vars to avoid duplicate errors
      "@typescript-eslint/no-unused-vars": "off",

      // ==============================
      // React rules
      // ==============================

      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Using TypeScript instead
      "react/no-unescaped-entities": "off",
      "react/display-name": "error",
      "react/no-access-state-in-setstate": "error",
      "react/no-danger": "off",
      "react/no-danger-with-children": "warn",
      "react/no-unused-prop-types": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": ["error", { allowNamespace: true }],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],

      // Enforce arrow functions for components
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      "react/self-closing-comp": ["error", { component: true, html: true }],

      // JSX formatting rules
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "ignore",
        },
      ],

      "react/jsx-boolean-value": "error",
      "react/hook-use-state": "error",

      // Enforce consistent JSX prop ordering
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: "last",
          reservedFirst: false,
          locale: "auto",
        },
      ],

      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],

      // ==============================
      // Import rules
      // ==============================

      "import/prefer-default-export": "off",
      "import/no-cycle": ["error", { maxDepth: 1 }],
      "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
      "import/export": "error",
      "import/no-mutable-exports": "error",
      "import/first": "error",
      "import/exports-last": "error",
      "import/newline-after-import": ["error", { count: 1 }],
      // Enforce extension-less imports
      "import/extensions": [
        "error",
        "never",
        {
          ignorePackages: true,
          pattern: { json: "always", mp3: "always" },
        },
      ],

      // Enforce import ordering
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            { pattern: "@/**", group: "internal" },
            { pattern: "~/**", group: "internal" },
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },

  // --------------------------------------------------
  // Ignore patterns
  // --------------------------------------------------

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // --------------------------------------------------
  // Prettier plugin (must be last)
  // --------------------------------------------------

  prettierPluginRecommended,
];

export default eslintConfig;
