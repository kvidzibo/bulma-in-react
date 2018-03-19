import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Box extends PureComponent {
  render () {
    const { children } = this.props
    return <div className="box control">{children}</div>
  }
}

Box.propTypes = {
  children: PropTypes.node
}
