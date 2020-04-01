import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const wrapper = css`
  border: 1px solid black;
  border-radius: 6px;
  padding: 20px;
  max-width: 330px;
  margin: 10px;
  height: 485px;
  position: relative;
`

const h3Style = css`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`

const desc = css`
  text-align: center;
  font-size: 16px;
`

const option = css`
  color: #999999;
  position: absolute;
  font-size: 14px;
  top: 250px;
  padding-left: 25px;
  padding-right: 10px;
`

const award = css`
  position: absolute;
  left: 14px;
  top: 255px;
`

const learnMore = css`
  position: absolute;
  bottom: 50px;
  width: 100%;
  left: 0px;

  a {
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a span {
    margin-right: 10px;
  }
`

const OverviewCard = ({ type = 'weManage' }) => {
  const config = {
    weManage: {
      title: 'WE MANAGE',
      color: 'var(--orange-color)',
      desc:
        'We manage your judgment portfolio through all phases of the process from locating the judgment to collecting the final payment.',
      option: 'Best option if you have limited resources and staffing in your collection/special assets department.',
      link: '/we-manage/',
    },
    youManage: {
      title: 'YOU MANAGE',
      color: 'var(--blue-color)',
      desc:
        'You license the proprietary Guaranty Solutions Judgment Management System but perform your own research and collection efforts.',
      option:
        'Best option if you have the required resources and staffing in your collection/special assets department.',
      link: '/you-manage/',
    },
    wePurchase: {
      title: 'WE PURCHASE',
      color: 'var(--green-color)',
      desc: 'We will purchase the portfolio of judgments you are selling at a negotiated market rate.',
      option: 'Best option for fastest revenue realization.',
      link: '/we-purchase/',
    },
  }

  function getIcon() {
    if (type === 'weManage') {
      return <Svg icon="Barchart" color={config[type].color} />
    }
    if (type === 'youManage') {
      return <Svg icon="Activity" color={config[type].color} />
    }
    return <Svg icon="Dalla" color={config[type].color} />
  }

  return (
    <div css={wrapper} style={{ borderColor: config[type].color }}>
      <h3 css={h3Style} style={{ color: config[type].color }}>
        <span style={{ marginRight: 10 }}>{getIcon()}</span>

        {config[type].title}
      </h3>

      <span css={award}>
        <Svg icon="Award" color="#403A34" />
      </span>
      <div css={desc}>{config[type].desc}</div>
      <div css={option}>{config[type].option}</div>
      <div css={learnMore}>
        <Link to={config[type].link} style={{ color: config[type].color }}>
          <span>LEARN MORE</span>
          <Svg icon="ChevronRight" color={config[type].color} />
        </Link>
      </div>
    </div>
  )
}

export default OverviewCard
