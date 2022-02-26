import React, { useState } from 'react'
import { importWorker } from './importWorker';
import { AsyncReturnType } from "type-fest";

let worker: AsyncReturnType<typeof importWorker> | undefined;
(async() => {
  worker = await importWorker();
})()

function App() {
  const [data, setData] = useState<string>();
  
  return (
    <div className="App">
      <button onClick={async () => {
        setData("loading");
        setData(await worker?.sayHi())
      }}>
        Worker
      </button>
      <span>{data}</span>
    </div>
  )
}

export default App
