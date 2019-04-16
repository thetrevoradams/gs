import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WePurchase = () => (
  <Layout subNav="wePurchase">
    <SEO title="We Purchase" />
    <main className="textContainer">
      <h2 className="greenColor">Judgment Purchase</h2>
      <p>
        Whether you would like to sell your entire portfolio or a limited number
        of judgments, we will provide you with a proposal for purchase based
        upon current market rates for comparable judgments.
      </p>
    </main>
  </Layout>
)

export default WePurchase
