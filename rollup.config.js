import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/tatqan.js",
    format: "cjs",
    plugins: [terser()],
  },
  plugins: [
    scss({
      output: "dist/tatqan.css",
      watch: "src/style",
      outputStyle: "compressed",
    }),
    typescript(),
    copy({ targets: [{ src: "static/**/*", dest: "dist" }] }),
  ],
};
