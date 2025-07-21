import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // ✅ New ESLint flat config "ignores" field
    ignores: [
      "node_modules/",
      ".next/",
      "dist/",
      "out/",
      "src/generated/",
      "prisma/generated/",
      "**/__generated__/",
      ".vercel/",
      ".netlify/",
      "*.log",
      "*.tsbuildinfo",
      "coverage/",
      "*.snap",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig