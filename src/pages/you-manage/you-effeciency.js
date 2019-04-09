import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const YouEfficient = () => (
  <Layout>
    <SEO title="Efficienct - You Manage" />
    <h1>You Efficienct</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default YouEfficient
