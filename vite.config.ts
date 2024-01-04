import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPath from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
});
