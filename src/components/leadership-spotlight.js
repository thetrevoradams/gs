import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  padding: 50px;
  position: relative;
`

const imgCrop = css`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 100%;
`

const img = css`
  max-width: 220px;
  margin-top: -10px;
  margin-left: -10px;
  cursor: pointer;
`

const name = css`
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`

const svg = css`
  position: absolute;
  top: 185px;
  left: 190px;
  cursor: pointer;
`

const LeadershipSpotlight = ({
  config = { bioName: '', phone: '' },
  handleClick = function() {},
}) => {
  function _handleClick() {
    handleClick(config)
  }
  return (
    <div css={wrapper} onClick={_handleClick}>
      <div css={imgCrop}>
        <img
          css={img}
          style={config.name === 'Sam Lewis' ? { marginTop: -30 } : {}}
          src={config.image}
          alt={config.name}
        />
      </div>
      <div css={name}>{config.name}</div>
      <div>{config.position}</div>
      <svg
        css={svg}
        width="79"
        height="100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="39.5"
          cy="50.5"
          r="35.5"
          fill="#FDFDFD"
          filter="url(#filter0_d)"
        />
        <path
          d="M42.375 58.333L51 50l-8.625-8.333M28 50h23"
          stroke="#3194D2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="15"
            width="79"
            height="79"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default LeadershipSpotlight
