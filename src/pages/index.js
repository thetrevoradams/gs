import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OverviewCard from '../components/overview-card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <OverviewCard type="weManage" />
      <OverviewCard type="youManage" />
      <OverviewCard type="wePurchase" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
