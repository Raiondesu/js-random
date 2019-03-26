var plugins = [
  require('rollup-plugin-node-resolve')({ browser: true, main: true }),
  require('rollup-plugin-commonjs')()
]

module.exports = [
  {
    input: './unpkg/index.js',
    plugins,

    output: {
      file: './unpkg/index.js',
      format: 'iife',

      esModule: false
    },
  },
  {
    input: './global.ts',
    plugins: plugins.concat([
      require('rollup-plugin-typescript')({
        tsconfig: './tsconfig.unpkg.json',
        typescript: require('typescript')
      })
    ]),

    output: {
      file: './unpkg/global.js',
      format: 'iife',

      esModule: false
    },
  },
];
