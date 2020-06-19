/* eslint-env node */

import { terser } from "rollup-plugin-terser";

/**
 * Options for Rollup.js.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/index.esm.js",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "./dist/index.js",
      format: "commonjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "./dist/index.umd.js",
      name: "jsonLogic",
      format: "umd",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "./dist/index.umd.min.js",
      name: "jsonLogic",
      format: "umd",
      exports: "named",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
};

export default options;
