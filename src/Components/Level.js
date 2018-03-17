import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Level extends PureComponent {
  render () {
    const { items = [] } = this.props
    return (
      <nav className="level">
        {items.map((item, key) => (
          <div key={key} className="level-item has-text-centered">
            <div>
              <p className="heading">{item.heading}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>
        ))}
      </nav>
    )
  }
}

Level.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

export default Level
