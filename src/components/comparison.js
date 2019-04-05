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
    color: rgba(62, 173, 156, 1);
    background-color: rgba(62, 173, 156, 0.2);
    border-top-color: rgba(62, 173, 156, 1);
    border-right-color: rgba(62, 173, 156, 1);
  }

  tr td:last-child {
    color: rgba(62, 173, 156, 1);
    background-color: rgba(62, 173, 156, 0.2);
    border-right-color: rgba(62, 173, 156, 1);
    border-left: none;
  }

  tr td:nth-child(2),
  tr th:nth-child(2) {
    background-color: rgba(220, 127, 13, 0.2);
    border-left-color: #dc7f0d;
    color: #dc7f0d;
    text-align: center;
  }

  tr th:nth-child(2) {
    border-top-color: #dc7f0d;
  }

  tr td:nth-child(3),
  tr th:nth-child(3) {
    background-color: rgba(52, 148, 209, 0.2);
    color: rgba(52, 148, 209, 1);
    border-left-color: rgba(52, 148, 209, 1);
    border-right: 1px solid rgba(52, 148, 209, 1);
  }

  tr th:nth-child(3) {
    border-right-color: rgba(52, 148, 209, 1);
    border-top-color: rgba(52, 148, 209, 1);
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
    padding: 5px 10px;
  }

  td:nth-child(2),
  td:nth-child(3),
  td:nth-child(4) {
    width: 120px;
    position: relative;
    text-align: center;
  }

  td:nth-child(2) svg,
  td:nth-child(3) svg,
  td:nth-child(4) svg {
    position: absolute;
    bottom: 2px;
    left: calc(50% - 7px);
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td>
          <Svg icon="Checkmark" color="rgba(52, 148, 209, 1)" />
        </td>
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Links to relavent documents
          </span>
        </td>
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td>
          <Svg icon="Checkmark" color="rgba(52, 148, 209, 1)" />
        </td>
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Judgment & lien expiration tracking
          </span>
        </td>
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td>
          <Svg icon="Checkmark" color="rgba(52, 148, 209, 1)" />
        </td>
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowSub">
            <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
            Individual debtor data management
          </span>
        </td>
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td>
          <Svg icon="Checkmark" color="rgba(52, 148, 209, 1)" />
        </td>
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">Judgment research and acquisition</span>
        </td>
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">
            Judgment expiration monitoring and renewal
          </span>
        </td>
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">
            Real and personal property lien monitoring and renewal
          </span>
        </td>
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
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
        <td>
          <Svg icon="Checkmark" color="#dc7f0d" />
        </td>
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <span className="rowHeader">Sale of judgements</span>
        </td>
        <td />
        <td />
        <td>
          <Svg icon="Checkmark" color="rgba(62, 173, 156, 1)" />
        </td>
      </tr>
      <tr css={bottomRow}>
        <td>
          <span className="rowHeader">Upfront cost</span>
        </td>
        <td>No Cost </td>
        <td>Based on value of portfolio</td>
        <td>No Cost</td>
      </tr>
    </table>
  </div>
)

export default Comparison
