import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
    <Link to="/" className="navbar-brand">React Starter</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample09">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact/">Contact</Link>
        </li>
      </ul>
    </div>
    </nav>
)
