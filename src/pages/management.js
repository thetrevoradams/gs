import React from 'react' // eslint-disable-line no-unused-vars

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeadershipSpotlight from '../components/leadership-spotlight'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import brian from '../images/Brian.jpg'
import guy from '../images/Guy.jpg'
import dustin from '../images/Dustin.jpg'
import sam from '../images/Sam.png'

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

const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  margin: 50px 0px;

  @media (max-width: 699px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Management = () => (
  <Layout>
    <SEO title="Management" />
    <main className="textContainer">
      <h1 css={title}>Management</h1>
      <p css={sub}>
        The integrity of our processes reflects the professionalism and
        standards of our team.
      </p>

      <div css={grid}>
        <LeadershipSpotlight
          config={{
            image: brian,
            name: 'Brian Evans',
            position: 'Managing Partner',
            bioName: 'brian',
          }}
        />
        <LeadershipSpotlight
          config={{
            image: guy,
            name: 'Guy Adams',
            position: 'Chief Information Officer',
            bioName: 'guy',
          }}
        />
        <LeadershipSpotlight
          config={{
            image: dustin,
            name: 'Dustin Horne',
            position: 'General Counsel',
            bioName: 'dustin',
          }}
        />
        <LeadershipSpotlight
          config={{
            image: sam,
            name: 'Sam Evans',
            position: 'Director of Research',
            bioName: 'sam',
          }}
        />
      </div>

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
