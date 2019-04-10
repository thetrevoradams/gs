import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'
import Image from './image'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const headerStyles = css`
  position: relative;
  color: #fdfdfd;
  font-size: 18px;
  height: calc(68vh - 125px);

  a {
    align-self: center;
  }
`
const navStyles = css`
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  padding: 25px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  font-weight: 500;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) -9.48%,
    rgba(0, 0, 0, 0) 100%
  );
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
    color: var(--orange-color);
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
  let styleOverride = { backgroundColor: 'initial' };
  if (!lightBackground) {
    styleOverride = {
      backgroundColor: '#545454',
      height: '125px'
    }
  }
  return (
    <header css={headerStyles} style={styleOverride}>
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
      {lightBackground ? <Image imgName="skyscrappers" altText="sky scrappers" /> : null}
    </header>
  )
}

export default Header
