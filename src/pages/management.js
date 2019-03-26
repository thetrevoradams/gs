import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Management = () => (
  <Layout>
    <SEO title="Management" />
    <h1>Management</h1>
    <p>Welcome</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Management
