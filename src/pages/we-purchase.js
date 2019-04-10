import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WePurchase = () => (
  <Layout subNav="wePurchase">
    <SEO title="We Purchase" />
    <h1>We Purchase</h1>
    <p>Welome</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WePurchase
