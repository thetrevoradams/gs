import React from 'react' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Svg from '../components/svg'

const pageLayout = css`
  p {
    margin-top: 15px;
    font-size: 14px;
  }
  h3,
  h4 {
    margin-bottom: 5px;
    text-transform: capitalize;
  }
  h4 {
    text-align: center;
  }
  .smallState {
    margin-left: 10px;
    flex: unset;
  }
  .smallState .MuiInputLabel-root,
  .smallState .MuiInputBase-root,
  .smallState .MuiInputBase-input {
    width: 70px;
    flex: unset;
  }

  .oneOrOtherDivider {
    border: 2px solid var(--orange-color);
    border-radius: 10px;
    height: 3px;
    width: 40px;
    margin: 15px 40px;
    flex: unset;
  }

  .securityInput {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    & > span {
      white-space: nowrap;
      margin-right: 10px;
    }
  }

  @media (max-width: 830px) {
    .oneOrOtherDivider {
      margin: 15px 2%;
    }
  }
  @media (max-width: 751px) {
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
    .securityInput {
      justify-content: center;
    }
    .smallState {
      margin-left: 0;
    }
    .smallState .MuiInputLabel-root,
    .smallState .MuiInputBase-root,
    .smallState .MuiInputBase-input {
      width: 100%;
    }
    .addressBlock {
      border: 1px solid var(--orange-color);
      border-radius: 4px;
      padding: 15px;
    }
  }
`
const inputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

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
const singleInput = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > div {
    flex: 1;
  }

  @media (max-width: 751px) {
    flex-direction: column;
    & > div {
      width: 100%;
      margin-top: 8px;
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

const Research = () => (
  <Layout>
    <SEO title="Debtor Research" />
    <main className="wideContainer">
      <h1>Debtor Research Request</h1>
      <div css={pageLayout}>
        <form name="research" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <input type="hidden" name="form-name" value="research" />
          <h3>Requestor</h3>
          <div css={singleInput}>
            <TextField
              size="small"
              id="outlined-business-input"
              label="Institution Name"
              type="text"
              name="institution"
              autoComplete="institution"
              margin="normal"
              required
              variant="outlined"
            />
          </div>
          <div css={inputContainer}>
            <TextField
              size="small"
              id="outlined-name-input"
              label="Requestor Name"
              type="text"
              name="requestorName"
              autoComplete="requestorName"
              required
              margin="normal"
              variant="outlined"
            />

            <TextField
              size="small"
              id="outlined-name-input"
              label="Requestor Title"
              type="text"
              name="requestorTitle"
              autoComplete="requestorTitle"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div css={inputContainer}>
            <TextField
              size="small"
              id="outlined-email-input"
              label="Requestor Email"
              type="email"
              name="requestorEmail"
              autoComplete="requestorEmail"
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-phone-input"
              label="Requestor Phone Number"
              type="tel"
              name="requestorPhone"
              autoComplete="requestorPhone"
              margin="normal"
              variant="outlined"
            />
          </div>
          <br />
          <h3>Debtor</h3>
          <div css={singleInput}>
            <TextField
              size="small"
              id="outlined-debtor-name-input"
              label="Debtor Name"
              type="text"
              name="debtorName"
              autoComplete="debtorName"
              margin="normal"
              required
              variant="outlined"
            />
          </div>
          <br />
          <h4 className="orangeColor">Enter at least one of the following</h4>
          <div css={inputContainer}>
            <div className="securityInput">
              <span>
                {[...Array(3)].map(() => (
                  <Svg icon="Star" color="#616161" />
                ))}{' '}
                -{' '}
                {[...Array(2)].map(() => (
                  <Svg icon="Star" color="#616161" />
                ))}{' '}
                -{' '}
              </span>
              <TextField
                size="small"
                id="outlined-SSN-input"
                label="Last 4 of Debtor SSN"
                name="lastFourSSN"
                autoComplete="lastFourSSN"
                margin="normal"
                variant="outlined"
                inputProps={{
                  maxLength: 4,
                }}
                className="shortInput"
              />
            </div>
            <div className="oneOrOtherDivider" />
            <div className="addressBlock">
              <div css={singleInput} style={{ flex: 2 }}>
                <TextField
                  size="small"
                  id="outlined-debtor-address-input"
                  label="Debtor Street Address"
                  type="text"
                  name="debtorAddress"
                  autoComplete="debtorAddress"
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <div css={inputContainer}>
                <TextField
                  size="small"
                  id="outlined-debtor-city-input"
                  label="City"
                  type="text"
                  name="debtorCity"
                  autoComplete="debtorCity"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  size="small"
                  id="outlined-debtor-state-input"
                  label="State"
                  type="text"
                  name="debtorState"
                  autoComplete="debtorState"
                  margin="normal"
                  className="smallState"
                  variant="outlined"
                  inputProps={{
                    maxLength: 2,
                  }}
                />
                <TextField
                  size="small"
                  id="outlined-debtor-postal-input"
                  label="Postal Code"
                  type="text"
                  name="debtorPostal"
                  autoComplete="debtorPostal"
                  margin="normal"
                  variant="outlined"
                  inputProps={{
                    maxLength: 6,
                  }}
                />
              </div>
            </div>
          </div>
          <br />
          <TextField
            size="small"
            id="outlined-multiline-static"
            label="Debtor Connected Entities"
            name="debtorEntities"
            type="text"
            placeholder="Entities to which the debtor is connected"
            multiline
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            size="small"
            id="outlined-multiline-static"
            label="Additional Questions or Information"
            name="questionsOrInfo"
            type="text"
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
      </div>
    </main>
  </Layout>
)

export default Research
