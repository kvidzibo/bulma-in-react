import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Loader extends PureComponent {
  render () {
    const {active, size = 5} = this.props

    if (!active) {
      return null
    }
    return (
      <div className="is-overlay" style={{zIndex: 1, backgroundColor: '#ffffff70'}}>
        <span className="icon" style={{right: 0, left: 0, top: 0, bottom: 0, margin: 'auto', position: 'absolute'}}>
          <i className={`fa fa-spinner fa-pulse fa-${size}x fa-fw`}></i>
        </span>
      </div>
    )
  }
}

Loader.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5])
}
