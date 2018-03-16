import React, { PureComponent } from 'react'

export default class Content extends PureComponent {
  render () {
    const { children } = this.props
    return (
      <div className="content">{children}</div>
    )
  }
}
