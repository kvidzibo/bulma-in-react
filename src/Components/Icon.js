import React, { PureComponent } from 'react'

export default class Icon extends PureComponent {
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
