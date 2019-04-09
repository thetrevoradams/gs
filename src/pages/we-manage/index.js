import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SubNav from '../../components/sub-nav';

const WeManage = () => (
  <Layout>
    <SEO title="Identification - We Manage" />
    <SubNav navTitle='We Manage'>
      <Link to="/we-manage/">Identification</Link>
      <Link to="/we-manage/protection">Protection</Link>
      <Link to="/we-manage/maximize">Maximize</Link>
    </SubNav>
    <h1>We Manage</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WeManage
