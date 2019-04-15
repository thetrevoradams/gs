import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import QuoteCard from '../../components/quote-card'
import slide01 from '../../images/slide01.png'

const YouAccess = () => (
  <Layout subNav="youManage">
    <SEO title="Access - You Manage" />
    <main className="textContainer">
      <h2 className="blueColor">Easy Document Access</h2>
      <p>
        No longer will you have to sort through filing cabinets or request boxes
        of documents from off-site storage locations when you are looking for
        actual copies of your judgment or other related documents. The Guaranty
        Solutions Judgment Management System allows you to attach/link all of
        the relevant documents to a specific record. This puts all of the
        documents you need at your fingertips where you can view or download
        them as your need requires, making your collection efforts more
        efficient.
      </p>

      <QuoteCard
        image={slide01}
        quote="There is nothing else like this in the marketplace. We now feel like we can intelligently manage our portfolio"
      />
    </main>
  </Layout>
)

export default YouAccess
