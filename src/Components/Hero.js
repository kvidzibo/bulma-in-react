import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Hero extends PureComponent {
  render () {
    const {
      title,
      subtitle,
      primary,
      success,
      info,
      link,
      warning,
      danger
    } = this.props
    const className = classNames({
      'hero': true,
      'is-primary': primary,
      'is-success': success,
      'is-info': info,
      'is-link': link,
      'is-warning': warning,
      'is-danger': danger
    })

    return (
      <section className={className}>
        <div className="hero-body">
          <div className="container">
            {!!title && (
              <h1 className="title">{title}</h1>
            )}
            {!!subtitle && (
              <h2 className="subtitle">{subtitle}</h2>
            )}
          </div>
        </div>
      </section>
    )
  }
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  link: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
}

Hero.defaultProps = {
  title: '',
  subtitle: ''
}

export default Hero
