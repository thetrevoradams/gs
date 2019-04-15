import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const navStyles = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    div:first-of-type {
      margin: 0 auto;
    }
    div:last-of-type {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      * {
        margin: 15px 15px 0 15px;
      }
    }
  }
`
const titleStyles = css`
  font-family: 'Butler';
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  position: relative;
  top: 5px;
  flex: 1;
  color: #525252;
`

const SubNav = ({ children, navTitle }) => (
  <div css={navStyles}>
    <div css={titleStyles}>{navTitle}</div>
    <div>{children}</div>
  </div>
)

export default SubNav
