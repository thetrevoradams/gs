import React from 'react' // eslint-disable-line no-unused-vars

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeadershipSpotlight from '../components/leadership-spotlight'
import Dialog from '@material-ui/core/Dialog'
import Svg from '../components/svg'
import Bios from '../biographies/bios'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import bioList from '../biographies/bioConfig'
import brian from '../images/Brian.jpg'
import guy from '../images/Guy.jpg'
import dustin from '../images/Dustin.jpg'
import sam from '../images/Sam.png'
import Svg from '../components/svg'

const bioImages = {
  brian,
  guy,
  dustin,
  sam,
}
const title = css`
  text-align: center;
`

const sub = css`
  text-align: center;
  font-size: 20px;
`
const desc = css`
  text-align: center;
  font-size: 18px;
`

const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  margin: 50px 0px;

  @media (max-width: 699px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const bioButton = css`
  position: relative;
  margin-bottom: 40px;
  font-size: 18px;
`

const dialogContent = css`
  display: flex;
  max-height: 600px;
  max-width: 700px;
  flex-wrap: wrap;

  .close-btn {
    width: 48px;
    height: 48px;
    background: #3194d2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .contact {
    width: 30%;
    max-width: 200px;
    background-color: #060606;
    font-size: 14px;
  }

  .img-wrapper {
    width: 100%;
  }

  .contact img {
    width: 100%;
  }

  .contactInfo div {
    color: #fdfdfd;
    display: flex;
    align-items: center;
  }

  .contactInfo {
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
    max-height: 600px;
    overflow-y: scroll;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    color: #403a34;
    font-weight: normal;
    margin-top: 0px;
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

const Management = () => {
  const [modalOpen, setOpenModal] = React.useState(false)
  const [isFullwidth, setFullwidth] = React.useState(false)
  const [config, setConfig] = React.useState({
    image: brian,
    name: 'Brian Evans',
    position: 'Managing Partner',
    bioName: 'brian',
    phone: '480.924.6499',
    fax: '480.240.4187',
    email: 'bevans@guaranty-solutions.com',
  })

  function openDialog(config) {
    setConfig(config)
    if (window.innerWidth < 605) {
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
    <Layout>
      <SEO title="Management" />
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        onBackdropClick={handleClose}
        maxWidth="lg"
        fullScreen={isFullwidth}
      >
        <div css={dialogContent}>
          <div className="close-btn" onClick={handleClose}>
            <Svg icon="CloseX" color="white" scale={0.8} />
          </div>
          <div className="contact">
            <div className="img-wrapper">
              <img src={config.image} alt={config.name} />
            </div>
            <div className="contactInfo">
              <div>
                <span className="contact-icon">
                  <Svg icon="Phone" color="#3194D2" scale={0.8} />
                </span>
                <span>
                  <a href={`telto:${config.phone.split('.').join('-')}`}>
                    {config.phone}
                  </a>
                </span>
              </div>
              <div>
                <span className="contact-icon">
                  <Svg icon="Fax" color="#3194D2" scale={0.8} />
                </span>
                <span>{config.fax}</span>
              </div>
              <div>
                <span className="contact-icon">
                  <Svg icon="Email" color="#3194D2" scale={0.8} />
                </span>
                <span>
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </span>
              </div>
              <div>
                <span className="contact-icon">
                  <Svg icon="Download" color="#3194D2" scale={0.8} />
                </span>
                vcard
              </div>
            </div>
          </div>
          <div className="bio">
            <h3>{config.name}</h3>
            <h4>{config.position}</h4>
            {Bios[config.bioName].map(text => (
              <p>{text}</p>
            ))}
          </div>
        </div>
      </Dialog>
      <main className="textContainer">
        <h1 css={title}>Management</h1>
        <p css={sub}>
          The integrity of our processes reflects the professionalism and
          standards of our team.
        </p>

        <div css={grid}>
          <LeadershipSpotlight
            config={{
              image: brian,
              name: 'Brian Evans',
              position: 'Managing Partner',
              bioName: 'brian',
              phone: '480.924.6499',
              fax: '480.240.4187',
              email: 'bevans@guaranty-solutions.com',
            }}
            handleClick={openDialog}
          />
          <LeadershipSpotlight
            config={{
              image: guy,
              name: 'Guy Adams',
              position: 'Chief Information Officer',
              bioName: 'guy',
              phone: '480.924.6499',
              fax: '480.240.4187',
              email: 'gadams@guaranty-solutions.com',
            }}
            handleClick={openDialog}
          />
          <LeadershipSpotlight
            config={{
              image: dustin,
              name: 'Dustin Horne',
              position: 'General Counsel',
              bioName: 'dustin',
              phone: '480.924.6499',
              fax: '480.240.4187',
              email: 'dhorne@guaranty-solutions.com',
            }}
            handleClick={openDialog}
          />
          <LeadershipSpotlight
            config={{
              image: sam,
              name: 'Sam Lewis',
              position: 'Director of Research',
              bioName: 'sam',
              phone: '480.924.6499',
              fax: '480.240.4187',
              email: 'slewis@guaranty-solutions.com',
            }}
            handleClick={openDialog}
          />
        </div>

        <p css={desc}>
          Combined, our team has more than 70 years of experience in the
          business of finance and law. Our team comprises professionals from
          accounting, law, private equity fund management, investments, and
          financial operations.
        </p>
        <p css={desc}>
          We understand your business and the business of your clients. Our
          promise to you is a professional interaction of trust and intelligence
          in finding solutions. Our clients find us forthright and capable at
          deploying the appropriate customized solutions for your needs.
        </p>
      </main>
    </Layout>
  )
}

export default Management
