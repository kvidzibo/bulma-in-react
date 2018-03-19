import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CardFooterItem extends PureComponent {
  render () {
    const { children, onClick } = this.props

    return (
      <a className="card-footer-item" onClick={onClick}>
        {children}
      </a>
    )
  }
}

CardFooterItem.propTypes = {
  children: PropTypes.node
}

export default CardFooterItem
