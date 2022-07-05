import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy-watch";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/main.ts",
    output: {
      file: "dist/tatqan.js",
      format: "cjs",
      plugins: [terser()],
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      copy({
        targets: [{ src: "static/**/*", dest: "dist" }],
        watch: "static",
      }),
    ],
  },
  {
    input: "src/style/style.ts",
    plugins: [
      scss({
        output: "dist/tatqan.css",
        watch: "src/style",
        outputStyle: "compressed",
      }),
    ],
  },
];
