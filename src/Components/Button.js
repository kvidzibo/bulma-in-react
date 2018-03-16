import React, { PureComponent } from 'react'
import classnames from 'classnames'
import Control from './Control'

export default class Button extends PureComponent {
  render () {
    const {
      children,
      onClick,
      loading = false,
      primary = false,
      success = false,
      info = false,
      link = false,
      warning = false,
      danger = false,
      control
    } = this.props
    const className = classnames({
      'button': 1,
      'is-loading': loading,
      'is-primary': primary,
      'is-success': success,
      'is-info': info,
      'is-link': link,
      'is-warning': warning,
      'is-danger': danger
    })

    return (
      <Control control={control}>
        <button className={className} onClick={onClick}>{children}</button>
      </Control>
    )
  }
}
