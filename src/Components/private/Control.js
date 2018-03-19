import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Control extends PureComponent {
  render () {
    const {
      children,
      control = false
    } = this.props

    if (control) {
      return <p className="control">{children}</p>
    }

    return children
  }
}

Control.propTypes = {
  children: PropTypes.node,
  control: PropTypes.bool
}

export default Control
