import React, { Fragment } from 'react'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './betslip-list.krem.css'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import uuid from "uuid"

export default class BetslipList extends React.Component {

  render() {
    const { bets, onClick } = this.props
    return (
      <Scoped postcss={styles}>
        <div className='betslipList' id='betslipList'>
          <Fragment>
            {
              bets.map((bet, index) => {
                return (
                  <button key={uuid.v1()} id={bet.id} className='bet' onClick={e => onClick(bet.id)}>
                    {bet.id + " : " + bet.name + " : $" + bet.amount}
                  </button>
                )
              })
            }
          </Fragment>
        </div>
      </Scoped>
    )
  }
}
