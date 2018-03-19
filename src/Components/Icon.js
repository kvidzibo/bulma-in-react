import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Icon extends PureComponent {
  render () {
    const {
      icon
    } = this.props

    return (
      <span className="icon">
        <i className={'fa fa-' + icon}></i>
      </span>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon
