import { defineVitestConfig } from "@nuxt/test-utils/config";
import path from "path";

export default defineVitestConfig({
  test: {
    globals: true,
    environment: "nuxt",
    setupFiles: "test/vitest.setup.ts",
    coverage: {
      provider: "v8",
      include: ["components/**/*.vue"],
      exclude: ["test/**", "coverage/**"],
    }
  },
  resolve: {
    alias: {
      "@": __dirname,
      "#imports": path.resolve(__dirname, "./.nuxt/imports.d.ts"),
    },
  },
});
