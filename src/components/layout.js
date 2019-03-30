/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children, lightHeader = false }) => (
  <>
    <Header lightBackground={lightHeader} />
    <div className="orangeLine" />
    <div className="spacer">
      <main>{children}</main>
    </div>
    <footer>Placeholder footer</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
