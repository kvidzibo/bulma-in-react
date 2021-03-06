import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FieldWithAddons extends PureComponent {
  render () {
    const {
      children,
      expanded
    } = this.props

    return (
      <div className='field has-addons'>
        {children.map((c, k) => (
          <p className={`control${(expanded && k === (children.length - 1)) ? ' is-expanded' : ''}`} key={k}>
            {c}
          </p>
        ))}
      </div>
    )
  }
}

FieldWithAddons.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default FieldWithAddons
