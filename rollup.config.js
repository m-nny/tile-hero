import typescript from "rollup-plugin-typescript2"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
import json from '@rollup/plugin-json';

export default {
  input: "src/sketch.ts",
  output: {
    name: "bundle",
    file: "build/sketch.js",
    format: "iife",
    sourcemaps: true,
  },
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    sourceMaps(),
    json(),
  ],
};
