import React from 'react' // eslint-disable-line no-unused-vars
import Layout from '../components/layout'
import SEO from '../components/seo'

const Success = () => (
  <Layout>
    <SEO title="Contact Success" />
    <main className="textContainer">
      <h1>Submission Successful</h1>
      <p>
        Thank you for reaching out. We have recieved your form submisson and will reach out as soon as possible.
      </p>
    </main>
  </Layout>
)

export default Success
