import React, {useState} from 'react'
import InvoicePage from './InvoicePage'

function Home() {

  const [topError, setTopError] = useState<string>();
  console.log(topError);

  return (
    <div className="app">
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <span style={{marginLeft:'200px'}}>
          <h1 className="center fs-30">React Invoice Generator</h1>
        </span>
        <a href='/pricemanager' style={{display: 'flex', justifyContent: 'right', verticalAlign: 'right', textDecoration:'none', color:'black'}}>
          <h4>Dashboard  </h4>
          <img style={{width:'14px', height:'14px', marginTop:'16px'}}src='/external-link-svgrepo-com.svg' />
        </a>
      </div>
      
      {topError ? (<h4 className="center" style={{ color: 'red' }}>{topError}</h4>) : (<></>)}
      <InvoicePage setTopError={setTopError}/>
    </div>
  )
}

export default Home
