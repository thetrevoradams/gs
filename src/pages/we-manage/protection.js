import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Svg from '../../components/svg'
import QuoteCard from '../../components/quote-card'
import slide03 from '../../images/slide03.png'

const bulletStyles = css`
  display: flex;
  flex-direction: row;
  margin: 0 0 10px 0;
  font-weight: 500;

  & svg:first-of-type {
    margin-right: 12px;
    min-width: 24px;
  }
`

const WeProtection = () => (
  <Layout subNav="weManage">
    <SEO title="Protection - We Manage" />
    <main className="textContainer">
      <h2 className="orangeColor">Protecting Your Judgment Claim</h2>
      <p>
        Your judgments are a wasting asset. If not renewed, they will expire
        anywhere between 5 and 20 years after they were issued, depending on the
        state where they were initially filed.
      </p>
      <p>
        Even when an institution is aware of a judgment, they frequently rely
        almost entirely on the tickler system of the law firm used to obtain the
        original judgment to notify them of expiring judgments. This approach is
        far from comprehensive frequently resulting in expired judgments and
        lost revenue. The problem is compounded when you acquire the assets of
        another institution.
      </p>
      <p>
        The Guaranty Solutions Judgment Management System is programmed with all
        of the pertinent expiration details from each state, enabling us to
        monitor your entire judgment portfolio to help ensure that judgments do
        not expire, and lien positions are maintained.
      </p>
      <div css={bulletStyles}>
        <Svg icon="ChevronsRight" color="var(--orange-color)" />
        You can have confidence that your entire portfolio is being monitored to
        preserve your claim.
      </div>
      <QuoteCard
        image={slide03}
        quote="Before we found Guaranty Solutions we were losing millions of dollars of portfolio value due to expiring judgments"
      />
    </main>
  </Layout>
)

export default WeProtection
