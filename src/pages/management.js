import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const title = css`
  text-align: center;
`

const sub = css`
  text-align: center;
  font-size: 20px;
`
const desc = css`
  text-align: center;
  font-size: 18px;
`

const Management = () => (
  <Layout>
    <SEO title="Management" />
    <main className="textContainer">
      <h2 css={title}>Management</h2>
      <p css={sub}>
        The integrity of our processes reflects the professionalism and
        standards of our team.
      </p>

      <div>...</div>

      <p css={desc}>
        Combined, our team has more than 70 years of experience in the business
        of finance and law. Our team comprises professionals from accounting,
        law, private equity fund management, investments, and financial
        operations.
      </p>
      <p css={desc}>
        We understand your business and the business of your clients. Our
        promise to you is a professional interaction of trust and intelligence
        in finding solutions. Our clients find us forthright and capable at
        deploying the appropriate customized solutions for your needs.
      </p>
    </main>
  </Layout>
)

export default Management
