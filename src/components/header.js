import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const navStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  padding: 25px 10px;
  font-weight: 500;
  color: #fdfdfd;
  font-size: 18px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) -9.48%,
    rgba(0, 0, 0, 0) 100%
  );
`
const noLinkStyles = css`
  text-decoration: none;
  color: inherit;
`

const Header = () => (
  <header>
    <nav css={navStyles}>
      <Link to="/about-us" css={noLinkStyles}>
        <span>About</span>
      </Link>
      <Link to="/" css={noLinkStyles}>
        <span>Our Services</span>
      </Link>
      <Link to="/">
        <Svg icon="Logo" />
      </Link>
      <Link to="/management/" css={noLinkStyles}>
        <span>Management</span>
      </Link>
      <Link to="/contact" css={noLinkStyles}>
        <span>Contact</span>
      </Link>
    </nav>
  </header>
)

export default Header
