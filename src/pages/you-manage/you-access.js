import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const YouAccess = () => (
  <Layout>
    <SEO title="Access - You Manage" />
    <h1>You Access</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default YouAccess
