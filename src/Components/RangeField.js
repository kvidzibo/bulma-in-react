import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RangeField extends PureComponent {
  render () {
    const { children, seperator = '-' } = this.props
    if (children.length !== 2) { return null }

    return (
      <div className="field is-grouped">
        <div className="field has-addons">
          <p className="control">
            {children[0]}
          </p>
          <p className="control">
            <a className="button is-static">
              {seperator}
            </a>
          </p>
          <p className="control">
            {children[1]}
          </p>
        </div>
      </div>
    )
  }
}

RangeField.propTypes = {
  children: function ({ children }) {
    if (typeof children === 'undefined' || children.length !== 2) {
      throw new Error('2 children is required')
    }
  },
  seperator: PropTypes.string
}

export default RangeField
