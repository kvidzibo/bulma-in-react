import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Notification extends PureComponent {
  render () {
    const {
      children,
      primary,
      success,
      info,
      link,
      warning,
      danger
    } = this.props

    const className = classnames({
      'notification': 1,
      'is-primary': primary,
      'is-success': success,
      'is-info': info,
      'is-link': link,
      'is-warning': warning,
      'is-danger': danger
    })
    return <div className={className}>{children}</div>
  }
}

Notification.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  link: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
}

export default Notification
