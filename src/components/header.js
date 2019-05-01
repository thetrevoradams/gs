import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'
import Image from './image'
import Popover from '@material-ui/core/Popover'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const headerStyles = css`
  position: relative;
  color: #fdfdfd;
  font-size: 18px;
  height: calc(68vh - 127px);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) -9.48%,
    rgba(0, 0, 0, 0) 100%
  );

  a,
  .popUp {
    align-self: center;
  }
  @media (max-width: 900px) {
    height: calc(68vh - 130px);
  }
  @media (max-width: 700px) {
    height: 275px;
  }
`
const subnavOptions = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 10px;

    span {
      margin-left: 10px;
    }
  }
`
const hideOnMobile = css`
  @media (max-width: 975px) {
    display: none;
  }
`

const heroTextContainer = css`
  position: absolute;
  top: 38%;
  left: 10px;
  right: 10px;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 65px;
    font-weight: 500;
  }
  h2 {
    font-size: 36px;
    font-weight: 300;
    margin-top: 20px;
  }
  @media (max-width: 690px) {
    h1 {
      font-size: 3.3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 660px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
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
  justify-content: space-around;
  align-content: center;
  font-weight: 500;
  margin: 0 auto;
  a {
    align-self: center;
  }

  @media (max-width: 975px) {
    justify-content: space-between;
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
`

const mobileMenu = css`
  display: none;

  @media (max-width: 975px) {
    display: block;
    margin: 5px 30px 0 0;
  }
  @media (max-width: 400px) {
    margin: 10px 20px 0 0;
  }
  @media (max-width: 400px) {
    position: absolute;
    right: 0;
  }
`
const mobileLogo = css`
  transition: all 0.25s ease-in-out;
  @media (max-width: 975px) {
    transform: scale(0.75, 0.75);
    margin-left: -30px;
  }
  @media (max-width: 400px) {
    transform: scale(0.65, 0.65);
    margin-left: -55px;
  }
  @media (max-width: 375px) {
    transform: scale(0.55, 0.55);
    margin-left: -70px;
  }
`
const serviceContainer = css`
  display: flex;
`

const Header = ({ lightBackground = false, openSidebar }) => {
  let [subnavOpen, setSubnavOpen] = React.useState(false)
  let [anchorEl, setAnchorEl] = React.useState(null)
  let styleOverride = { backgroundColor: 'initial' }
  if (!lightBackground) {
    styleOverride = {
      backgroundColor: '#545454',
      height: '125px',
    }
  }

  const openSubNav = e => {
    if (e && e.currentTarget) {
      setAnchorEl(e.currentTarget)
      setSubnavOpen(true)
    }
  }
  const closeSubnav = () => {
    console.log('closing')
    setSubnavOpen(false)
  }
  return (
    <header css={headerStyles} style={styleOverride}>
      <nav css={navStyles}>
        <Link
          to="/about-us"
          css={[hideOnMobile, noLinkStyles]}
          activeClassName="activeLink"
        >
          <span>About</span>
        </Link>
        <div css={[serviceContainer, hideOnMobile]}>
          <span
            aria-haspopup="true"
            css={hideOnMobile}
            className="popUp"
            onClick={openSubNav}
            onMouseEnter={openSubNav}
          >
            Our Services
          </span>
          <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={subnavOpen}
            onClose={closeSubnav}
            disableRestoreFocus
          >
            <div css={subnavOptions} onMouseLeave={closeSubnav}>
              <Link to="/we-manage" css={noLinkStyles}>
                <Svg icon="Barchart" color={'var(--orange-color)'} />
                <span className="orangeColor">We Manage</span>
              </Link>
              <Link to="/you-manage" css={noLinkStyles}>
                <Svg icon="Activity" color={'var(--blue-color)'} />
                <span className="blueColor">You Manage</span>
              </Link>
              <Link to="/we-purchase" css={noLinkStyles}>
                <Svg icon="Dalla" color={'var(--green-color)'} />
                <span className="greenColor">We Purchase</span>
              </Link>
            </div>
          </Popover>
        </div>
        <Link to="/" css={mobileLogo}>
          <Svg icon="Logo" />
        </Link>
        <Link
          to="/management/"
          css={[hideOnMobile, noLinkStyles]}
          activeClassName="activeLink"
        >
          <span>Management</span>
        </Link>
        <Link
          to="/contact"
          css={[hideOnMobile, noLinkStyles]}
          activeClassName="activeLink"
        >
          <span>Contact</span>
        </Link>
        <div
          role="button"
          aria-label="mobile menu"
          tabIndex="0"
          css={mobileMenu}
          aria-pressed="false"
          onClick={() => openSidebar()}
        >
          <Svg icon="Hamburger" color="#fff" />
        </div>
      </nav>
      {lightBackground ? (
        <>
          <Image imgName="skyscrappers" altText="sky scrappers" />
          <div css={heroTextContainer}>
            <h1>The Leading Expert</h1>
            <h2 style={{ fontFamily: 'Montserrat' }}>
              in Judgment Portfolio Management
            </h2>
          </div>
        </>
      ) : null}
    </header>
  )
}

export default Header
