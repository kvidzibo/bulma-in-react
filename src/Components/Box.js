import React, { PureComponent } from 'react'

export default class Box extends PureComponent {
  render () {
    const { children } = this.props
    return <div className="box control">{children}</div>
  }
}
