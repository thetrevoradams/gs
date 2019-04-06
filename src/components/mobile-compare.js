import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const wrapper = css`
  max-width: 400px;
  margin: auto;

  .title {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h3 {
    text-align: center;
    margin: 0;
  }

  .content {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .section {
    padding: 20px 10px;
  }

  .border-top {
    border-top: 1px solid #cccccc;
  }

  .rowHeader {
    font-weight: bold;
    display: block;
    font-size: 14px;
    text-align: center;
  }

  .rowSub {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`

const weManage = css`
  margin-bottom: 50px;

  .title {
    background-color: rgba(220, 127, 13, 0.2);
    border: 1px solid rgba(220, 127, 13, 1);
  }

  h3 {
    color: rgba(220, 127, 13, 1);
  }

  .content {
    border: 1px solid rgba(220, 127, 13, 1);
    border-top: none;
  }
`

const youManage = css`
  margin-bottom: 50px;
  .title {
    background-color: rgba(52, 148, 209, 0.2);
    border: 1px solid rgba(52, 148, 209, 1);
  }

  h3 {
    color: rgba(52, 148, 209, 1);
  }

  .content {
    border: 1px solid rgba(52, 148, 209, 1);
    border-top: none;
  }
`

const wePurchase = css`
  margin-bottom: 50px;

  .title {
    background-color: rgba(62, 173, 156, 0.2);
    border: 1px solid rgba(62, 173, 156, 1);
  }

  h3 {
    color: rgba(62, 173, 156, 1);
  }

  .content {
    border: 1px solid rgba(62, 173, 156, 1);
    border-top: none;
  }
`

const MobileCompare = () => {
  return (
    <div css={wrapper}>
      <div className="we-manage" css={weManage}>
        <div className="title">
          <h3>WE MANAGE</h3>
        </div>
        <div className="content">
          <div className="section">
            <div className="rowHeader" style={{ marginBottom: 10 }}>
              GS Judgment Management System
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Judgment database
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Links relevant documents
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Judgment & lien expiration
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Individual debtor data management
            </div>
          </div>
          <div className="section border-top">
            <div className="rowHeader">Judgment research and acquisition</div>
          </div>
          <div className="section border-top">
            <div className="rowHeader">
              Judgment expiration monitoring and renewal
            </div>
          </div>
          <div className="section border-top">
            <div className="rowHeader">
              Real and Personal Property Lien monitoring and renewal
            </div>
          </div>

          <div className="section border-top">
            <div className="rowHeader" style={{ marginBottom: 10 }}>
              Debtor specific research
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Bank accounts
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Employment
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Property ownership
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Related business
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Subpoena targets
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Likelihood of bankruptcy
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Additional judgments
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Forensic accounting
            </div>
          </div>

          <div className="section border-top">
            <div className="rowHeader" style={{ marginBottom: 10 }}>
              Collection Actions
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Bank account and wage
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Garishment
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Charging orders
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Debtor's exams
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Foreclosure action
            </div>
          </div>
        </div>
      </div>

      <div className="you-manage" css={youManage}>
        <div className="title">
          <h3>YOU MANAGE</h3>
        </div>

        <div className="content">
          <div className="section">
            <div className="rowHeader" style={{ marginBottom: 10 }}>
              GS Judgment Management System
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Judgment Database
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Link relevant documents
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Judgment & lien expiration tracking
            </div>
            <div className="rowSub">
              <Svg icon="ChevronsRight" color="#9F9C99" scale=".8" />
              Individual debtor data management
            </div>
          </div>
        </div>
      </div>

      <div className="we-purchase" css={wePurchase}>
        <div className="title">
          <h3>WE PURCHASE</h3>
        </div>
        <div className="content">
          <div className="section">
            <div className="rowHeader">Sale of judgments</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileCompare
