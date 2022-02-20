import React, { useState } from 'react'

import "./module-workers-polyfill.js"
import base_worker from "comlink:./worker";
const { hello } = base_worker();

function App() {
  const [data, setData] = useState<string>()

  return (
    <div className="App">
      <button onClick={async () => {
        setData("loading");
        setData(await hello())
      }}>
        Worker
      </button>

      <span>{data}</span>
    </div>
  )
}

export default App
