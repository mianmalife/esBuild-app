const process = require('process')
require('esbuild').buildSync({
  entryPoints: ['./index.jsx'],
  assetNames: 'static/[name]-[hash]',
  loader: {'.png': 'file' },
  bundle: true,
  // minify: true, // 启动代码压缩
  // sourcemap: true,
  // watch: {
  //   onRebuild(error, result) {
  //     if (error) console.log(error)
  //     else console.log(result)
  //   }
  // },
  outdir: 'build'
})