import React from 'react' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Svg from '../components/svg'

const pageLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 10px 1fr;

  form {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  div {
    grid-column-start: 5;

    p {
      margin-top: 15px;
      font-size: 14px;
    }
  }
`
const inputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > div {
    flex: 1;
  }
  & > div:last-of-type {
    margin-left: 10px;
  }

  @media (max-width: 751px) {
    & > div {
      width: 100%;
    }
    & > div:last-of-type {
      margin-left: 0;
    }
  }
`
const submitBtn = css`
  font-family: 'Montserrat';
  background-color: #dc7f0d;
  color: #fdfdfd;
  font-size: 14px;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: #c57514;
  }
`
const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <main className="textContainer">
      <h1>Contact</h1>
      <div css={pageLayout}>
        <form
          name="contact"
          data-netlify-recaptcha="true"
          method="POST"
          data-netlify="true"
        >
          <div css={inputContainer}>
            <TextField
              id="outlined-name-input"
              label="Name"
              type="text"
              name="name"
              autoComplete="name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            placeholder="How may we help you?"
            multiline
            fullWidth
            rows="8"
            margin="normal"
            variant="outlined"
          />

          <Button variant="contained" css={submitBtn}>
            <Svg icon="Send" color="#FDFDFD" />
            SUBMIT
          </Button>
        </form>
        <div>
          <p>
            Guaranty Solutions, LLC
            <br />
            1347 N. Greenfield Rd. Ste 103 <br />
            Mesa, AZ 85205
          </p>
        </div>
      </div>
    </main>
  </Layout>
)

export default Contact
