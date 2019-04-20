import React from 'react' // eslint-disable-line no-unused-vars

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeadershipBioDialog from '../components/leadership-bio-dialog'
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

  .imageWrapper {
    height: 220px;
    width: 220px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;

    img[data-bioname='sam'] {
      margin-top: -15px;
    }
  }
  .arrowFab {
    position: absolute;
    bottom: 70px;
    left: 170px;
    border-radius: 50%;
    background-color: #fdfdfd;
    height: 70px;
    width: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    svg {
      position: relative;
      top: 25px;
      left: 22px;
    }
  }
  .name {
    font-weight: bold;
  }
`

const Management = () => {
  const [bioSelection, setBioSelection] = React.useState({})
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const assignBio = bioName => {
    let config = bioList.find(bio => bio.bioName === bioName)
    if (config) {
      config.image = bioImages[bioName]
      console.log('config', config)
      setBioSelection(config)
      setDialogOpen(true)
    }
  }
  const dialogCloseHandler = () => {
    setDialogOpen(false)
  }
  return (
    <Layout>
      <SEO title="Management" />
      <main className="textContainer">
        <h1 css={title}>Management</h1>
        <p css={sub}>
          The integrity of our processes reflects the professionalism and
          standards of our team.
        </p>

        <div css={grid}>
          {bioList.map(({ name, position, bioName }) => (
            <div css={bioButton} key={name}>
              <div
                className="imageWrapper"
                role="button"
                onClick={() => assignBio(bioName)}
              >
                <img
                  src={bioImages[bioName]}
                  alt={name}
                  data-bioname={bioName}
                />
                <div className="arrowFab">
                  <Svg icon="ArrowRight" color="#3194D2" />
                </div>
              </div>
              <div className="name">{name}</div>
              <div className="position">{position}</div>
            </div>
          ))}
        </div>

        <LeadershipBioDialog
          config={bioSelection}
          dialogOpen={dialogOpen}
          dialogCloseHandler={dialogCloseHandler}
        />

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
