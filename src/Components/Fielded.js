import React, { PureComponent } from 'react'

export default class Fielded extends PureComponent {
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
