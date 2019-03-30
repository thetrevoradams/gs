import React from 'react' // eslint-disable-line no-unused-vars
// import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OverviewCard from '../components/overview-card'

const tagLine = css`
  width: 100%;
  font-size: 2rem;
  line-height: 1.2;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 30px;
`

const IndexPage = () => (
  <>
    <SEO
      title="Guaranty Solutions"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Layout lightHeader={true}>
      <main style={{ margin: '0 auto' }}>
        <div css={tagLine} className="flex row center">
          <span>We turn your <b>write-offs</b> into <b>revenue!</b></span>
        </div>
        <div className="flex center wrap">
          <OverviewCard type="weManage" />
          <OverviewCard type="youManage" />
          <OverviewCard type="wePurchase" />
        </div>
      </main>
    </Layout>
  </>
)

export default IndexPage
