import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  // 🔹 Ignore build artifacts and dependencies
  {
    ignores: [
      ".next/**",
    "node_modules/**",
    "dist/**",
    "next-env.d.ts",
    ],
  },

  // 🔹 Apply rules only to your source files
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      // TypeScript rules (keep useful ones, relax strict ones if needed)
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-import-type-side-effects": "warn",

      // Temporarily relax noisy rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },

  // 🔹 Import sorting
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
];

export default eslintConfig;
