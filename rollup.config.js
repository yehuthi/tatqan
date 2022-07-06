import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy-watch";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import closure from "@ampproject/rollup-plugin-closure-compiler";

const temp_dir = `build/tmp`;
const dist_dir = `build/dist`;

export default [
  {
    input: "src/main.ts",
    output: {
      file: `${dist_dir}/tatqan.js`,
      format: "cjs",
      plugins: [terser()],
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      copy({
        targets: [{ src: "static/**/*", dest: dist_dir }],
        watch: "static",
      }),
      closure({
        compilation_level: "ADVANCED",
      }),
    ],
  },
  {
    input: "src/style/style.scss",
    output: {
      format: "cjs",
      file: `${temp_dir}/style.js`,
    },
    plugins: [
      scss({
        output: `${dist_dir}/tatqan.css`,
        watch: "src/style",
        outputStyle: "compressed",
      }),
    ],
  },
  {
    input: "src/style/vkb.scss",
    output: {
      format: "cjs",
      file: `${temp_dir}/vkb.js`,
    },
    plugins: [
      scss({
        output: `${dist_dir}/vkb.css`,
        watch: "src/style",
        outputStyle: "compressed",
      }),
    ],
  },
];
