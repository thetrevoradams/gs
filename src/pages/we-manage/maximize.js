import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Svg from '../../components/svg'
import QuoteCard from '../../components/quote-card'
import slide02 from '../../images/slide02.png'

const bulletTopContainer = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const bulletContainer = css`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  @media (max-width: 750px) {
    width: 391px;
    max-width: 100%;
    margin: 0 auto;
  }
`
const bulletStyles = css`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin: 0 0 15px 0;

  & svg:first-of-type {
    margin-right: 12px;
    min-width: 24px;
  }
`

const WeMaximize = () => (
  <Layout subNav="weManage">
    <SEO title="Protection - We Maximize" />
    <main className="textContainer">
      <h2 className="orangeColor">Maximizing Your Portfolio Value</h2>
      <p>
        Guaranty Solutions is an information company. We have not only the
        expertise to find, locate and manage your judgments but to uncover the
        critical information about your debtors that can truly impact the amount
        collected. We employ information professionals who have previously
        trained the FBI, IRS and numerous other agencies and legal professionals
        to uncover hidden assets. Their expertise is now utilized to help our
        clients obtain the best possible collection results.
      </p>
      <p>
        Upon engagement, Guaranty Solutions will underwrite each identified
        debtor identifying the debtor’s strength or weakness in each of these
        categories:
      </p>
      <div css={bulletTopContainer}>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Employment identification
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Real property ownership
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Banking relationships
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Related business interests
          </div>
        </div>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Subpoena opportunities
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Additional judgments against debtor
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Likelihood of bankruptcy
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--orange-color)" />
            Additional factors
          </div>
        </div>
      </div>

      <QuoteCard
        image={slide02}
        quote="We gave them some of the worst files in our portfolio and somehow they found a way to collect on them"
      />
    </main>
  </Layout>
)

export default WeMaximize
