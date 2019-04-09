import React from 'react'
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
`
const titleStyles = css`
  flex: 1;
`

const SubNav = ({ children, navTitle }) => (
  <div css={navStyles}>
    <div css={titleStyles}>{navTitle}</div>
    <div>{children}</div>
  </div>
)

export default SubNav
