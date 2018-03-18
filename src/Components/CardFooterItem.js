import React, { PureComponent } from 'react'

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

export default CardFooterItem
