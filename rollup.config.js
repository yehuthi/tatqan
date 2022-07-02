import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/tatqan.js",
    format: "cjs",
    plugins: [terser()],
  },
  plugins: [
    typescript(),
    copy({ targets: [{ src: "static/**/*", dest: "dist" }] }),
  ],
};
