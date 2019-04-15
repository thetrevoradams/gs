import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 16px;
  margin-top: 50px;
  display: flex;
  align-items: center;

  .float-card {
    display: none;
  }

  .float-card img {
    float: left;
    width: 100px;
  }

  img {
    margin: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .slant {
    -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    padding: 0px;
    background: #1a1a1a;
    width: 110%;
    display: inline-flex;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media (max-width: 599px) {
    flex-wrap: wrap;

    img {
      transform: none;
    }

    .slant {
      clip-path: none;
      -webkit-clip-path: none;
      width: 100%;
      justify-content: center;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 5px;
    }

    .quote {
      padding: 10px;
    }
  }
`

const QuoteCard = ({ image, quote }) => {
  return (
    <div css={wrapper}>
      <div className="slant">
        <img src={image} alt="customer" />
      </div>
      <div className="quote">"{quote}"</div>
    </div>
  )
}

export default QuoteCard
