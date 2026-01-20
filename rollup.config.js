import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cssbundle from 'rollup-plugin-css-bundle';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
      {
        file: packageJson.module,
        format: "esm",
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
    ],
    plugins: [
      cssbundle(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm", assetFileNames: 'assets/[name]-[hash][extname]' }],
    plugins: [dts.default(), cssbundle()],
  },
];