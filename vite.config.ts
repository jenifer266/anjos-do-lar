import { defineConfig } from "vite-plus";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },

  staged: {
    "*": "vp check --fix",
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    printWidth: 80,
    sortPackageJson: false,
    ignorePatterns: [
      ".DS_Store",
      ".vscode",
      ".env",
      ".env.*",
      "!.env.example",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
    ],
  },
});
