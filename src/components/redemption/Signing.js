import React from 'react'
import { connect } from 'react-redux'

import StatusIndicator from '../svgs/StatusIndicator'

const Signing = ({ error }) => {
  return (
    <div className="confirming">
      <div className="page-top">
        <StatusIndicator pulse />
      </div>
      <div className="page-body">
        <div className="step">
          Step 3/6
        </div>
        <div className="title">
          { error ? 'Error signing your transaction' : 'Waiting on signing group' }
        </div>
        <hr />
        <div className="description">
          <p>We’re waiting for the deposit signing group to build and sign your Bitcoin transaction.</p>
        </div>
        <div className="error">
          { error }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: state.redemption.signTxError,
})

export default connect(
  mapStateToProps,
)(Signing)
