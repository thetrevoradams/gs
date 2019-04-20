import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars
import Dialog from '@material-ui/core/Dialog'

import Bios from '../biographies/bios'
import Svg from './svg'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  padding: 50px;
  position: relative;
`

const dialogContent = css`
  position: relative;
  display: flex;
  max-height: 90vh;
  flex-wrap: wrap;
  max-width: 1110px;
  width: 100vw;

  .close-btn {
    width: 48px;
    height: 48px;
    background: #3194d2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact {
    width: 34%;
    background-color: #060606;
    font-size: 16px;
    z-index: 10;
  }

  .img-wrapper {
    width: 100%;
    overflow: hidden;
  }

  .contact img {
    width: 100%;
    border-top-left-radius: 4px;
  }

  .contactInfo div {
    color: #fdfdfd;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .contactInfo {
    margin: 0 0 40px 10px;
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }

  .contact-icon {
    padding: 5px 10px;
  }

  .bio {
    padding: 20px 40px;
    font-size: 16px;
    flex: 1;
    overflow-y: scroll;

    * {
      font-family: 'Montserrat', sans-serif;
      color: #403a34;
    }
    h3 {
      margin-bottom: 10px;
      margin-top: 20px;
      font-size: 38px;
    }

    h4 {
      font-weight: normal;
      margin-top: 0px;
      font-size: 22px;
    }
    .bioTextContainer {
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      padding-top: 150px;
      width: 100%;
      position: absolute;
      top: 0;
      max-width: 650px;

      @media (max-width: 1200px) {
        width: 49vw;
      }
      @media (max-width: 900px) {
        width: 47vw;
      }
    }
    .bioTextScrollContainer {
      position: relative;
      max-height: 100%;
      overflow: auto;
      & p:last-of-type {
        margin-bottom: 130px;
      }
    }
    .bioText {
      font-weight: 300;
      font-size: 16px;
      /* margin-bottom: 20px; */
    }
    .bioHeader {
      position: relative;
      display: flex;
      flex-direction: row;
      & > div:first-of-type {
        flex: 1;
      }
    }
  }

  @media (max-width: 795px), (max-height: 590px) {
    .contact {
      width: 100%;
      max-width: none;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .img-wrapper {
      max-width: 200px;
    }

    overflow: scroll;
  }

  @media (max-width: 640px) {
    .img-wrapper {
      margin: auto;
    }

    .contactInfo {
      margin-left: 30px;
    }
  }
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
const bioOverlay = css`
  position: absolute;
  bottom: 0;
  height: 125px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 49.83%,
    rgba(255, 255, 255, 0) 148.4%
  );
  transform: rotate(-180deg);
`

const LeadershipSpotlight = ({ config = { bioName: '', phone: '' } }) => {
  const [modalOpen, setOpenModal] = React.useState(false)
  const [isFullwidth, setFullwidth] = React.useState(false)

  function handleClick() {
    if (window.innerWidth < 795) {
      setFullwidth(true)
    } else {
      setFullwidth(false)
    }
    setOpenModal(true)
  }

  function handleClose() {
    setOpenModal(false)
  }

  return (
    <div css={wrapper}>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        onBackdropClick={handleClose}
        maxWidth="lg"
        fullScreen={isFullwidth}
      >
        <div css={dialogContent}>
          <div className="contact">
            <div className="img-wrapper">
              <img src={config.image} alt={config.name} />
            </div>
            <div className="contactInfo">
              <div>
                <span className="contact-icon">
                  <Svg icon="Phone" color="#3194D2" />
                </span>
                <span>
                  <a href={`telto:${config.phone.split('.').join('-')}`}>
                    {config.phone}
                  </a>
                </span>
              </div>
              <div>
                <span className="contact-icon">
                  <Svg icon="Fax" color="#3194D2" />
                </span>
                <span>{config.fax}</span>
              </div>
              <div>
                <span className="contact-icon">
                  <Svg icon="Email" color="#3194D2" />
                </span>
                <span>
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </span>
              </div>
              <div>
                <span className="contact-icon">
                  <Svg icon="Download" color="#3194D2" />
                </span>
                vcard
              </div>
            </div>
          </div>
          <div className="bio">
            <div className="bioHeader">
              <div>
                <h3>{config.name}</h3>
                <h4>{config.position}</h4>
              </div>
              <div className="close-btn" onClick={handleClose}>
                <Svg icon="CloseX" color="white" scale={0.8} />
              </div>
            </div>
            <div className="bioTextContainer">
              <div className="bioTextScrollContainer">
                {Bios[config.bioName].map((text, index) => (
                  <p key={`${config.name}${index}`} className="bioText">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div css={bioOverlay} />
        </div>
      </Dialog>

      <div css={imgCrop} onClick={handleClick}>
        <img
          css={img}
          style={config.name === 'Sam Evans' ? { marginTop: -30 } : {}}
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
