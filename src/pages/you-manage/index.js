import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Svg from '../../components/svg'

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
  width: 500px;
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

const YouManage = () => (
  <Layout subNav="youManage">
    <SEO title="Overview - You Manage" />
    <main className="textContainer" css={
      css`
        h4 {
          margin-top: 50px;
          font-family: 'Montserrat' sans-serif
        }
      `
    }>
      <h2 className="blueColor">Judgment Database</h2>
      <p>
        No need to worry about convincing your IT group to approve and support a
        new software. With the Guaranty Solutions Judgment Management System,
        there is no software to install or maintain. Your judgment portfolio
        will be completely hosted in the cloud in a secure encrypted online
        database that will be available 24/7 to only those whom you choose to
        provide with access.
      </p>
      <p>
        Once you have entered the applicable information, each record will
        contain all the information needed for a successful efficient collection
        process, such as:
      </p>

      <h4>Judgment</h4>
      <div css={bulletTopContainer}>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Filing number
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Filing date
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Expiration date
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Judgment amount
          </div>
        </div>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Interest rate
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Attorney fees & cost
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Current judgment with interest
          </div>
        </div>
      </div>

      <h4>General Debtor Details</h4>
      <div css={bulletTopContainer}>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Address
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Phones
          </div>
        </div>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            SSN
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            DOB
          </div>
        </div>
      </div>

      <h4>Collection Related Information</h4>
      <div css={bulletTopContainer}>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Employment
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Bank accounts
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Real estate
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Business interests
          </div>
        </div>
        <div css={bulletContainer}>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Subpoena targes
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Additional judgments
          </div>
          <div css={bulletStyles}>
            <Svg icon="ChevronsRight" color="var(--blue-color)" />
            Likelihood of bankruptcy
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default YouManage
