import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class EqualColumns extends PureComponent {
  render () {
    const {
      children
    } = this.props

    return (
      <div className='columns'>
        {children.map((c, k) => (
          <div className="column" key={k}>
            {c}
          </div>
        ))}
      </div>
    )
  }
}

EqualColumns.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default EqualColumns
