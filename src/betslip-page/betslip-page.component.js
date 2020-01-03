import React, { Fragment } from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import styles from './betslip-page.krem.css'
import BetslipList from "../betslip-list/betslip-list.component";

// import BetslipStore from "@portal/betslipStore";

@AsyncDecorator
export default class BetslipPage extends React.Component {

  state = {
    bets: [
      { name: 'bet one' },
      { name: 'bet two' }
    ]
  }
  storeSub = null

  // componentDidMount() {
  //   this.storeSub = BetslipStore.stateChanged.subscribe(state => {
  //     if (state) {
  //       this.setState({ bets: state.bets });
  //     }
  //   })
  //   BetslipStore.fetchBets();
  // }

  render() {
    const { bets } = this.state
    return (
      <Scoped postcss={styles}>
        <div className='betslipPage'>
          <div className='betslipPageContents'>
            <div className='listWrapper'>
              <div>
                <p>Your bets:</p>
                <BetslipList
                  bets={this.state.bets}
                />
              </div>
            </div>
          </div>
        </div>
      </Scoped>
    )
  }

  componentDidUpdate(prevProps, prevState) { }

}
