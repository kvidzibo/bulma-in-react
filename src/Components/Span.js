import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Span extends PureComponent {
  render () {
    const {
      children,
      capitalized,
      lowercase,
      uppercase,
      italic,
      bold,
      danger,
      warning,
      success,
      primary
    } = this.props

    const className = classnames({
      'is-capitalized': capitalized,
      'is-lowercase': lowercase,
      'is-uppercase': uppercase,
      'is-italic': italic,
      'has-text-weight-bold': bold,
      'has-text-danger': danger,
      'has-text-warning': warning,
      'has-text-success': success,
      'has-text-primary': primary
    })

    return (
      <span className={className}>{children}</span>
    )
  }
}

Span.propTypes = {
  children: PropTypes.node,
  capitalized: PropTypes.bool,
  lowercase: PropTypes.bool,
  uppercase: PropTypes.bool,
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  primary: PropTypes.bool
}

export default Span
