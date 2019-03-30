import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const headerStyles = css`
  padding: 25px 10px;
  color: #fdfdfd;
  font-size: 18px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) -9.48%,
    rgba(0, 0, 0, 0) 100%
  );

  a {
    align-self: center;
  }
`
const navStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  font-weight: 500;
  margin: 0 auto;
  max-width: 1400px;

  a {
    align-self: center;
  }
`
const noLinkStyles = css`
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: #dc7f0d;
  }
  @media (max-width: 975px) {
    display: none;
  }
`

const mobileMenu = css`
  display: none;

  @media (max-width: 975px) {
    display: block;
  }
`
const mobileLogo = css`
  transition: all 0.25s ease-in-out;
  @media (max-width: 975px) {
    transform: scale(0.75, 0.75);
  }
  @media (max-width: 400px) {
    transform: scale(0.65, 0.65);
  }
`

const Header = ({ lightBackground = false }) => {
  const bkg = lightBackground ? '#fff' : '#545454'
  return (
    <header css={headerStyles} style={{ backgroundColor: bkg }}>
      <nav css={navStyles}>
        <Link to="/about-us" css={noLinkStyles} activeClassName="activeLink">
          <span>About</span>
        </Link>
        <Link to="/" css={noLinkStyles}>
          <span>Our Services</span>
        </Link>
        <Link to="/" css={mobileLogo}>
          <Svg icon="Logo" />
        </Link>
        <Link to="/management/" css={noLinkStyles} activeClassName="activeLink">
          <span>Management</span>
        </Link>
        <Link to="/contact" css={noLinkStyles} activeClassName="activeLink">
          <span>Contact</span>
        </Link>
        <Link to="/contact" css={mobileMenu} activeClassName="activeLink">
          <Svg icon="Hamburger" color="#fff" />
        </Link>
      </nav>
    </header>
  )
}

export default Header
