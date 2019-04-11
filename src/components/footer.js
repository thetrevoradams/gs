import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  display: flex;
  background-color: #272323;
  width: 100%;
  justify-content: space-around;
  padding: 50px 0px;

  strong a {
    margin-bottom: 20px;
    font-weight: medium;
  }
  span a {
    margin: 10px 0px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <div css={wrapper}>
      <div className="column">
        <strong>
          <Link to="/we-manage/">WE MANAGE</Link>
        </strong>
        <span>
          <Link to="/management/">Identification</Link>
        </span>
        <span>
          <Link to="/management/">Protection</Link>
        </span>
        <span>
          <Link to="/management/">Maximize</Link>
        </span>
      </div>
      <div className="column">
        <strong>
          <Link>YOU MANAGE</Link>
        </strong>
        <span>
          <Link>Overview</Link>
        </span>
        <span>
          <Link>Protection</Link>
        </span>
        <span>
          <Link>Access</Link>
        </span>
        <span>
          <Link>Efficiency</Link>
        </span>
      </div>
      <div className="column">
        <strong>
          <Link>WE PURCHASE</Link>
        </strong>
        <span>
          <Link>Overview</Link>
        </span>
      </div>
      <div className="column">
        <strong>
          <Link>RESOURCES</Link>
        </strong>
        <span>
          <Link>Contact</Link>
        </span>
        <span>
          <Link>About</Link>
        </span>
        <span>
          <Link>Management</Link>
        </span>
      </div>
    </div>
  )
}

export default Footer
