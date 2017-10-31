import React, { Component } from 'react'
import Header from '../components/Header'

class About extends Component {
  static displayName = `Index`

  render (props) {
    return (
      <div>
        <Header />
        <h1>Welcome to the about page.</h1>
      </div>
    )
  }
}

export default About;