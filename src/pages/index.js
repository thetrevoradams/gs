import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OverviewCard from '../components/overview-card'

const IndexPage = () => (
  <Layout lightHeader={true}>
    <SEO title="Guaranty Solutions" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      <OverviewCard type="weManage" />
      <OverviewCard type="youManage" />
      <OverviewCard type="wePurchase" />
    </div>
  </Layout>
)

export default IndexPage
