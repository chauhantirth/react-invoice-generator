import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"
import Home from './components/Home'
import PriceManager from './components/PriceManager'
import {changeRoute} from './store/actions'
import {  useDispatch, useSelector } from 'react-redux'
require('dotenv').config()

function App() {
  const dispatch=useDispatch()

  const handleClick=(route:string)=>{
    dispatch(changeRoute(route))
  }

  return (
    <Router>
      {/* <Link to="/" onClick={()=>handleClick('/')}>Home</Link>
      <Link to="/priceManager" onClick={()=>handleClick('/priceManager')}>Price manager</Link> */}
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/priceManager">
            <PriceManager />
          </Route>
        </Switch>
    </Router>
  )
}

export default App
