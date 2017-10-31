import React, { Component } from 'react'
import Header from '../components/Header'

class Index extends Component {
  static displayName = `Index`

  render (props) {
    return (
      <div>
        <Header />
        <h1>Welcome home</h1>
      </div>
    )
  }
}

export default Index;