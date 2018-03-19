import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Fielded extends PureComponent {
  render () {
    const {
      children,
      fielded = false
    } = this.props

    if (fielded) {
      return <p className="field">{children}</p>
    }

    return children
  }
}

Fielded.propTypes = {
  children: PropTypes.node,
  fielded: PropTypes.bool
}

export default Fielded
