import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const YouManage = () => (
  <Layout>
    <SEO title="Overview - You Manage" />
    <h1>You Manage</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default YouManage
