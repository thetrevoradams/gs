import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Svg from '../../components/svg'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

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

const WeManage = () => (
  <Layout subNav="weManage">
    <SEO title="Identification - We Manage" />
    <main className="textContainer">
      <h2 className='orangeColor'>Identifying Your Portfolio</h2>
      <p>
        Due to a variety of factors including mergers and acquisitions,
        inadequate internal tracking systems, etc. most institutions have a very
        limited understanding of the size or value of their judgment portfolio.
        Once the write-off has taken place, it is common that many judgments
        simply fall through the cracks.
      </p>
      <p>
        Guaranty Solutions will begin the management of your portfolio by first
        ensuring we have all of the judgments obtained in the name of your
        institution as well as those judgments which may have been obtained in
        the name of other institutions you may have acquired over the past 20
        years. To accomplish this, we perform complex searches through the
        myriad of public records online. If we determine that there may be a
        high concentration of judgments in specific court system where online
        recording may be limited or non-existent, we go directly to the court
        records to obtain copies of the judgments.
      </p>
      <p>
        Experience has shown that our location efforts have frequently found
        millions of dollars of additional judgments that were previously unknown
        to our clients.{' '}
      </p>
      <div css={bulletStyles}>
        <Svg icon="ChevronsRight" color="var(--orange-color)" />
        More judgments mean greater potential revenues from collection!
      </div>
    </main>
  </Layout>
)

export default WeManage
