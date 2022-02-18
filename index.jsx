import * as React from 'react'
import * as Server from 'react-dom/server'
// @ts-ignore
import duck from './asset/image/duck.png'
// @ts-ignore
import esbuildFav from './asset/image/favicon.svg'

const TagDiv = () => <div>
  Hello esbuild!!
  <img src={esbuildFav} alt="" />
  <img src={duck} alt="" />
</div>

console.log(Server.renderToString(<TagDiv />))
document.body.innerHTML = Server.renderToString(<TagDiv />, )