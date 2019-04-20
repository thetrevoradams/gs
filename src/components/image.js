import React from 'react' // eslint-disable-line no-unused-vars
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const imageStyling = css`
  z-index: -10;
  height: calc(70vh - 18px);

  @media (max-width: 700px) {
    height: 400px;
  }
`

const overlay = css`
  margin: 0;
  padding: 0;
  position: absolute;
  top: -125px;
  left: 0;
  right: 0;
  height: calc(70vh - 18px);
  background: rgba(0, 0, 0, 0.67);

  @media (max-width: 700px) {
    height: 400px;
  }
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        skyscrappers: file(relativePath: { eq: "skyscrappers.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div css={overlay}>
        <Img
          fluid={data.skyscrappers.childImageSharp.fluid}
          css={imageStyling}
        />
      </div>
    )}
  />
)
export default Image
