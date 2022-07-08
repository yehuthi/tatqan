import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import closure from "@ampproject/rollup-plugin-closure-compiler";
import { minifyHTML } from "rollup-plugin-minify-html";
import * as os from "os";
import * as path from "path";

const temp_dir = path.join(os.tmpdir(), "tatqan_build");
const dist_dir = `dist`;

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
      minifyHTML({
        targets: [
          {
            src: "src/index.html",
            dest: `${dist_dir}/index.html`,
            minifierOptions: {
              collapseWhitespace: true,
              minifyCSS: true,
              minifyJS: true,
            },
          },
        ],
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
