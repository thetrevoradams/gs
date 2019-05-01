import React from 'react' // eslint-disable-line no-unused-vars

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeadershipSpotlight from '../components/leadership-spotlight'
import Dialog from '@material-ui/core/Dialog'
import Svg from '../components/svg'
import Bios from '../biographies/bios'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import brian from '../images/Brian.jpg'
import guy from '../images/Guy.jpg'
import dustin from '../images/Dustin.jpg'
import sam from '../images/Sam.png'
import brianVcard from '../biographies/brian.vcf'
import guyVcard from '../biographies/guy.vcf'
import dustinVcard from '../biographies/dustin.vcf'
import samVcard from '../biographies/sam.vcf'

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
const bioOverlay = css`
  position: absolute;
  bottom: 0;
  height: 125px;
  width: calc(100% - 350px);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 49.83%,
    rgba(255, 255, 255, 0) 148.4%
  );
  transform: rotate(-180deg);
`

const dialogContent = css`
  display: flex;
  max-height: 600px;
  max-width: 900px;
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
    z-index: 10;
    cursor: pointer;
  }

  .contact {
    width: 45%;
    max-width: 300px;
    background-color: #060606;
    font-size: 14px;
  }

  .img-wrapper {
    width: 100%;
    max-height: 400px;
    overflow: hidden;
  }

  .contact img {
    width: 100%;
  }

  .contactInfo {
    div,
    div a {
      display: flex;
      align-items: center;
    }
  }

  .contactInfo {
    * {
      text-decoration: none;
      color: #fdfdfd;
    }
    margin: 10px 0 0 10px;
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

    p:last-of-type {
      margin-bottom: 130px;
    }
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
      overflow: scroll;
    }
    .contactInfo {
      h3,
      h4 {
        padding-left: 10px;
      }
    }

    .img-wrapper {
      width: unset;
      max-height: 360px;

      img {
        width: unset;
      }

      img[alt='Sam Lewis'] {
        object-position: 0 -45px;
      }
    }

    .bio {
      overflow: unset;

      p:last-of-type {
        margin-bottom: 100px;
      }
    }
  }

  @media (max-width: 555px) {
    .contactInfo,
    .img-wrapper {
      margin: 0 auto;
    }
    .contactInfo {
      margin-top: 15px;
    }
    .img-wrapper {
      width: 60%;
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 380px) {
    .img-wrapper {
      width: 100%;
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
    vCard: brianVcard,
  })

  function resizeLogic() {
    if (window.innerWidth < 795) {
      setFullwidth(true)
    } else {
      setFullwidth(false)
    }
  }

  React.useEffect(() => {
    const handleResize = debounce(resizeLogic, 200)
    window.addEventListener('resize', handleResize)
  }, [])

  function debounce(func, wait, immediate) {
    var timeout
    return function() {
      var context = this,
        args = arguments
      var later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  function openDialog(config) {
    setConfig(config)
    if (window.innerWidth <= 795) {
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
        style={{
          overflowScrolling: 'touch',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div css={dialogContent}>
          <div className="close-btn" onClick={handleClose}>
            <Svg icon="CloseX" color="white" />
          </div>
          <div className="contact">
            <div className="img-wrapper">
              <img src={config.image} alt={config.name} />
            </div>
            <div className="contactInfo">
              {isFullwidth ? (
                <>
                  <h3>{config.name}</h3>
                  <h4>{config.position}</h4>
                </>
              ) : null}
              <div>
                <span className="contact-icon">
                  <Svg icon="Phone" color="#3194D2" scale={0.8} />
                </span>
                <span>
                  <a href={`tel:${config.phone.split('.').join('-')}`}>
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
                <a href={config.vCard} download>
                  <span className="contact-icon">
                    <Svg icon="Download" color="#3194D2" scale={0.8} />
                  </span>
                  Add to contacts
                </a>
              </div>
            </div>
          </div>
          <div className="bio">
            {isFullwidth ? null : (
              <>
                <h3>{config.name}</h3>
                <h4>{config.position}</h4>
              </>
            )}
            {Bios[config.bioName].map((text, index) => (
              <p key={`${config.bioName}${index}`}>{text}</p>
            ))}
            {isFullwidth ? null : <div css={bioOverlay} />}
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
              vCard: brianVcard,
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
              vCard: guyVcard,
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
              vCard: dustinVcard,
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
              vCard: samVcard,
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
