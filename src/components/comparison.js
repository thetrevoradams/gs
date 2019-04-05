import React from 'react' // eslint-disable-line no-unused-vars
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const wrapper = css`
  max-width: 800px;
  margin: auto;

  h2 {
    text-align: center;
    margin: 50px 0px;
  }

  table {
    border-collapse: separate;
    border-spacing: 0px;
  }

  tr {
    border-bottom: 1px solid #e5e5e5;
    border-style: solid;
  }

  tr td:last-child {
    border-right: 1px solid #e5e5e5;
  }

  tr th:last-child {
    border-right: 1px solid #e5e5e5;
    border-top-right-radius: 10px;
  }

  th {
    text-align: center;
    font-size: 14px;
    border: 1px solid #e5e5e5;
    border-bottom: none;
    border-right: none;
    border-right: 1px solid #e5e5e5;
  }

  td {
    font-size: 12px;
    border-left: 1px solid #e5e5e5;
    padding: 5px;
  }

  td:nth-child(2),
  td:nth-child(3),
  td:nth-child(4) {
    width: 120px;
  }

  .rowHeader {
    font-weight: bold;
    display: block;
    font-size: 12px;
    padding-left: 5px;
  }

  .rowSub {
    display: flex;
    align-items: center;
  }
`

const topRow = css`
  td {
    border-top: 1px solid #e5e5e5;
  }
`

const bottomRow = css`
  td:first-child {
    border-bottom-left-radius: 10px;
  }

  td:last-child {
    border-bottom-right-radius: 10px;
  }
`

const Comparison = () => (
  <div css={wrapper}>
    <h2>COMPARISON</h2>

    <table>
      <tr>
        <th style={{ border: 'none' }} />
        <th style={{ borderTopLeftRadius: 10 }}>WE MANAGE</th>
        <th>YOU MANAGE</th>
        <th>WE PURCHASE</th>
      </tr>

      <tr css={topRow}>
        <td
          style={{
            borderTopLeftRadius: 10,
            borderRight: 'none',
          }}
        >
          <span className="rowHeader">GS Judgment Management System</span>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Judgment database
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Links to relavent documents
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Judgment & lien expiration tracking
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Individual debtor data management
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">Judgment research and acquisition</span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">
            Judgment expiration monitoring and renewal
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">
            Real and personal property lien monitoring and renewal
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">Debtor specific research</span>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Bank Accounts
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Employment
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Property ownership
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Related business
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Subpoena targets
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Likelihood of bankruptcy
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Additional judgments
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Forensic accounting
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">Collection actions</span>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Bank account and wage garnishment
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Charging orders
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Debtor’s exams
          </span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">Sale of judgements</span>
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr css={bottomRow}>
        <td>
          <span className="rowHeader">Upfront cost</span>
        </td>
        <td />
        <td />
        <td />
      </tr>
    </table>
  </div>
)

export default Comparison
