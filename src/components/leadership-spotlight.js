import React from 'react' // eslint-disable-line no-unused-vars

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  padding: 50px;
  position: relative;
`

const img = css`
  width: 220px;
  height: 220px;
  border-radius: 100%;
`

const name = css`
  font-weight: bold;
  font-size: 18px;
`

const svg = css`
  position: absolute;
  top: 185px;
  left: 190px;
`

const LeadershipSpotlight = ({ config }) => {
  return (
    <div css={wrapper}>
      <img css={img} src={config.image} />
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
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="15"
            width="79"
            height="79"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
