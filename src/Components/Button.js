import React, { PureComponent } from 'react'
import classnames from 'classnames'
import { Fielded } from './private'
import PropTypes from 'prop-types'

class Button extends PureComponent {
  render () {
    const {
      children,
      fielded,
      loading,
      primary,
      success,
      info,
      link,
      warning,
      danger,
      outlined,
      inverted,
      rounded,
      hovered,
      focused,
      active,
      icon,
      ...otherProps
    } = this.props

    const className = classnames({
      'button': 1,
      'is-loading': loading,
      'is-primary': primary,
      'is-success': success,
      'is-info': info,
      'is-link': link,
      'is-warning': warning,
      'is-danger': danger,
      'is-outlined': outlined,
      'is-inverted': inverted,
      'is-rounded': rounded,
      'is-hovered': hovered,
      'is-focused': focused,
      'is-active': active
    })

    return (
      <Fielded fielded={fielded}>
        <button className={className} {...otherProps}>
          {!!icon && <span className="icon is-small"><i className={`fa fa-${icon}`}></i></span>}
          {children}
        </button>
      </Fielded>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  fielded: PropTypes.bool,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  link: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  icon: PropTypes.string
}

export default Button
