import React, { PureComponent } from 'react'
import classnames from 'classnames'

export default class Control extends PureComponent {
  render () {
    const {
      children,
      control = false,
    } = this.props

    if (control) {
      return <p className="control">{children}</p>
    }

    return children
  }
}
