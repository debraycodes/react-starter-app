import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'

export default () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about/" component={About}/>
    <Route path="/contact/" component={Contact}/>
  </div>
)
