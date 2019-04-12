import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  background-color: #1A1C1D;
  width: 100%;

  .desktop,
  .mobile {
    justify-content: space-around;
    padding: 50px 0px;
    margin: auto;
  }

  .desktop {
    display: flex;
    max-width: 1000px;
  }

  .mobile {
    display: none;
    max-width: 500px;
  }

  strong a {
    margin-bottom: 20px;
    font-weight: medium;
  }
  span a {
    margin: 10px 0px;
    display: block;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
`
const sidebarStyles = css`
  flex-direction: column;
  background-color: unset;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 25px 0 0 25px;

    & span {
      margin: 5px 0 0 25px;
      font-size: 16px;
    }
  }
`

const Footer = ({ asSidebar = false }) => {
  return (
    <div css={asSidebar ? [wrapper, sidebarStyles] : wrapper}>
      <div className={asSidebar ? null : 'desktop'}>
        <div className="column">
          <strong>
            <Link to="/we-manage/">WE MANAGE</Link>
          </strong>
          <span>
            <Link to="/we-manage/">Identification</Link>
          </span>
          <span>
            <Link to="/we-manage/protection">Protection</Link>
          </span>
          <span>
            <Link to="/we-manage/maximize">Maximize</Link>
          </span>
        </div>
        <div className="column">
          <strong>
            <Link to="/you-manage/">YOU MANAGE</Link>
          </strong>
          <span>
            <Link to="/you-manage/">Overview</Link>
          </span>
          <span>
            <Link to="/you-manage/protection">Protection</Link>
          </span>
          <span>
            <Link to="/you-manage/access">Access</Link>
          </span>
          <span>
            <Link to="/you-manage/efficiency">Efficiency</Link>
          </span>
        </div>
        <div className="column">
          <strong>
            <Link to="/we-purchase/">WE PURCHASE</Link>
          </strong>
          <span>
            <Link to="/we-purchase/">Overview</Link>
          </span>
        </div>
        <div className="column">
          <strong>
            <Link to="/contact/">RESOURCES</Link>
          </strong>
          <span>
            <Link to="/contact/">Contact</Link>
          </span>
          <span>
            <Link to="/about-us/">About</Link>
          </span>
          <span>
            <Link to="/management/">Management</Link>
          </span>
        </div>
      </div>
      {asSidebar ? null : (
        <div className="mobile">
          <div className="column">
            <span>
              <Link to="/we-manage/">WE MANAGE</Link>
            </span>
            <span>
              <Link to="/you-manage/">YOU MANAGE</Link>
            </span>
            <span>
              <Link to="/we-purchase/">WE PURCHASE</Link>
            </span>
          </div>
          <div className="column">
            <span>
              <Link to="/contact/">CONTACT</Link>
            </span>
            <span>
              <Link to="/about-us/">ABOUT</Link>
            </span>
            <span>
              <Link to="/management/">MANAGEMENT</Link>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer
