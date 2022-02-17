import * as React from 'react'
import * as Server from 'react-dom/server'
import duck from './asset/image/duck.png'

const TagDiv = () => <div>
  Hello esbuild!!
  <img src="./asset/image/favicon.svg" alt="" />
  <img src={duck} alt="" />
</div>

console.log(Server.renderToString(<TagDiv />))
document.body.innerHTML = Server.renderToString(<TagDiv />, )