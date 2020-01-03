import React, { Fragment } from 'react'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './betslip-list.krem.css'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

@withRouter
export default class BetslipList extends React.Component {

  render() {
    const { bets } = this.props
    return (
      <Scoped postcss={styles}>
        <div className='betslipList'>
          <Fragment>
            {
              bets.map((bet, index) => {
                return (
                  <Link
                    key={bet.name}
                    className='bet'
                    to={`/`}
                  >
                    {bet.name + " : $" + bet.amount}
                  </Link>
                )
              })
            }
          </Fragment>
        </div>
      </Scoped>
    )
  }
}
