import React, {useState} from 'react'
import InvoicePage from './InvoicePage'

function Home() {

  const [topError, setTopError] = useState<string>();
  console.log(topError);

  return (
    <div className="app">
      <h1 className="center fs-30">React Invoice Generator</h1>
      {topError ? (<h4 className="center" style={{ color: 'red' }}>{topError}</h4>) : (<></>)}
      <InvoicePage setTopError={setTopError}/>
    </div>
  )
}

export default Home
