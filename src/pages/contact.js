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
  grid-template-columns: 1fr 1fr 1fr 50px 1.5fr;

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

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    & > div {
      margin: 0 auto;
      p {
        font-size: 16px;
      }
      * {
        font-size: 16px;
      }
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
    flex-direction: column;
    & > div {
      width: 100%;
      margin-top: 8px;
    }
    & > div:last-of-type {
      margin-left: 0;
    }
  }
`
const submitBtn = css`
  font-family: 'Montserrat', sans-serif;
  background-color: #dc7f0d;
  color: #fdfdfd;
  font-size: 14px;
  margin-top: 8px;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: #c57514;
  }
`
const contactLine = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  margin-bottom: 20px;
  font-size: 14px;

  & a {
    color: #403a34;
    text-decoration: none;
  }

  & span.pointer:hover {
    cursor: pointer;
  }

  & span:last-child {
    margin-left: 15px;
  }
`

const Contact = ({ classes }) => (
  <Layout>
    <SEO title="Contact" />
    <main className="wideContainer">
      <h1>Contact</h1>
      <div css={pageLayout}>
        <form name="contact" method="POST" data-netlify="true">
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
              required
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
            margin="dense"
            variant="outlined"
          />

          <Button variant="contained" css={submitBtn} type='submit'>
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

          <div css={contactLine}>
            <Svg icon="Phone" color="#3194D2" />
            <span className="pointer">
              <a href="tel:480-924-6499">480.924.6499</a>
            </span>
          </div>
          <div css={contactLine}>
            <Svg icon="Fax" color="#3194D2" />
            <span>480.240.4187</span>
          </div>
          <div css={contactLine}>
            <Svg icon="Email" color="#3194D2" />
            <span className="pointer">
              <a href="mailto:info@guaranty-solutions.com">
                info@guaranty-solutions.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default Contact
