import React from 'react' // eslint-disable-line no-unused-vars
// import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OverviewCard from '../components/overview-card'
import Comparison from '../components/comparison'
import MobileCompare from '../components/mobile-compare'

const tagLine = css`
  width: 100%;
  font-size: 2rem;
  line-height: 1.2;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 30px;
`

const comparisonChart = css`
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }

  @media (max-width: 767px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
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
          <span>
            We turn your <b>write offs</b> into <b>revenue!</b>
          </span>
        </div>
        <div className="flex center wrap">
          <OverviewCard type="weManage" />
          <OverviewCard type="youManage" />
          <OverviewCard type="wePurchase" />
        </div>
        <div css={comparisonChart}>
          <h2
            style={{
              margin: '50px 0px',
              textAlign: 'center',
              fontWeight: 300,
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            COMPARISON
          </h2>
          <div className="desktop">
            <Comparison />
          </div>
          <div className="mobile">
            <MobileCompare />
          </div>
        </div>
      </main>
    </Layout>
  </>
)

export default IndexPage
