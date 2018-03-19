import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Input extends PureComponent {
  render () {
    const {error, success, className = 'input', ...inputProps} = this.props
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
  type: 'text'
}

Input.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  className: PropTypes.string
}

export default Input
