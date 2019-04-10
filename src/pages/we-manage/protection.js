import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const WeProtection = () => (
  <Layout subNav='weManage'>
    <SEO title="Protection - We Manage" />
    <h1>We Manage - Protection</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WeProtection
