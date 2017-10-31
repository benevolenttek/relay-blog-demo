import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../../lib/withData'
import Header from '../../components/Header'
import Link from 'next/link'

class Dashboard extends Component {
  static displayName = `Dashboard`

  render (props) {
    return (
      <div>
        <Header />
        <h3>Admin Menu</h3>
        <Link href="/admin/entries">
          <a>Content</a>
        </Link>
      </div>
    )
  }
}

export default Dashboard;
