import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FEM_product_list_with_cart_main/",
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
});
