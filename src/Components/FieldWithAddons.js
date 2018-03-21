import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FieldWithAddons extends PureComponent {
  render () {
    const {
      children
    } = this.props

    return (
      <div className='field has-addons'>
        {children.map((c, k) => (
          <p className="control" key={k}>
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
