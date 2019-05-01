import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Svg from '../components/svg'

const bulletStyles = css`
  display: flex;
  flex-direction: row;
  margin: 0 0 15px 20px;

  & svg:first-of-type {
    margin-right: 12px;
    min-width: 24px;
  }
`

const topSpace = css`
  margin-top: 35px;
`
const orange = css`
  color: var(--orange-color);
`

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <main className="textContainer">
      <h1>About Us</h1>
      <p>
        Following the economic crisis of 2008, there was significant
        consolidation in the banking sector. As banks began managing the assets
        of a newly acquired institutions the focus was almost always on the real
        estate. Very few, if any institutions, focused on the judgments that
        were part of the acquired banks portfolio. Even more than a decade
        later, most institutions are aware of only a fraction of the judgments
        actually held in their name or in the name of an acquired institution.
        Unfortunately, this lack of awareness is resulting in millions of
        dollars of judgments expiring annually!
      </p>
      <p css={topSpace}>
        In 2010, recognizing an opportunity to help banks and other financial
        institutions identify and manage their judgment portfolio, a team of
        attorneys, accountants and information professionals formed Guaranty
        Solutions, LLC. With over 70 years combined experience, we developed a
        unique world class judgment identification and management system which
        enables us to identify an institution’s full portfolio of judgments,
        including those held in the name of an acquired institution. Once the
        judgments are identified we excel in underwriting the debtors to
        determine their ability to satisfy the judgment. Armed with this
        information our team of highly skilled debt counselors work with debtors
        to achieve a successful satisfaction of the judgment.
      </p>
      <p css={topSpace}>Whether a client chooses to:</p>
      <div>
        <div css={bulletStyles}>
          <Svg icon="ChevronsRight" color="var(--orange-color)" />
          Have their judgment portfolio managed by Guaranty Solutions
        </div>
        <div css={bulletStyles}>
          <Svg icon="ChevronsRight" color="var(--orange-color)" />
          License the Guaranty Solutions Judgment Management System to manage
          their own portfolio
        </div>
        <div css={bulletStyles}>
          <Svg icon="ChevronsRight" color="var(--orange-color)" />
          Sell their judgment portfolio to Guaranty Solutions at prevailing
          market rates
        </div>
      </div>
      <p style={{ fontWeight: 500 }} css={topSpace}>
        It is easy to see that we truly …{' '}
        <span css={orange}>Turn your write offs into revenue!</span>
      </p>
    </main>
  </Layout>
)

export default AboutUs
