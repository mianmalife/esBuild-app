const process = require('process')
const path = require('path')
require('esbuild').buildSync({
  entryPoints: ['./index.jsx'],
  assetNames: 'static/image/[name]-[hash]',
  publicPath: 'build',
  loader: {'.png': 'file', '.svg': 'dataurl' },
  bundle: true,
  // minify: true, // 启动代码压缩
  sourcemap: true,
  // watch: {
  //   onRebuild(error, result) {
  //     if (error) console.log(error)
  //     else console.log(result)
  //   }
  // },
  outdir: 'build'
})