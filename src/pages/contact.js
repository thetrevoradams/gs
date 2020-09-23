import React from 'react' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField'

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
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fdfdfd;
  font-size: 14px;
  padding: 6px 16px;
  margin-top: 8px;
  line-height: 1.75;
  min-width: 64px;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-weight: 500;
  border: none;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
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
  text-decoration: none;

  & svg {
    height: 27px;
    width: 27px;
  }
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

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <main className="wideContainer">
      <h1>Contact</h1>
      <div css={pageLayout}>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <div css={inputContainer}>
            <input type="hidden" name="form-name" value="contact" />
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
            name="message"
            placeholder="How may we help you?"
            multiline
            fullWidth
            rows="8"
            margin="dense"
            variant="outlined"
          />

          <button css={submitBtn} type="submit">
            <Svg icon="Send" color="#FDFDFD" />
            SUBMIT
          </button>
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
              <a href="mailto:info@guarantysolutions.com">info@guarantysolutions.com</a>
            </span>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default Contact
