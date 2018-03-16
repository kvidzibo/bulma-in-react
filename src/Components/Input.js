import React, { PureComponent } from 'react'
import classnames from 'classnames'

class Input extends PureComponent {
  render () {
    const {error, success, className, ...inputProps} = this.props
    const classNames = classnames(
      className,
      {
        'is-danger': error,
        'is-success': success
      }
    )
    return <input className={classNames} {...inputProps}/>
  }
}

Input.defaultProps = {
  type: 'text',
  className: 'input',
  error: '',
  success: ''
}

export default Input
