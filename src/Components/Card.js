import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Card extends PureComponent {
  render () {
    const { header, image, children, footerItems = [] } = this.props

    return (
      <div className="card">
        {!!header && (
          <header className="card-header">
            <div className="card-header-title">
              {header}
            </div>
          </header>
        )}
        {!!image && (
          <figure className="image is-4by3">
            <img src={image} alt="media"/>
          </figure>
        )}
        <div className="card-content">
          <div className="content">
            {children}
          </div>
        </div>
        {!!footerItems.length && (
          <footer className="card-footer">
            {footerItems}
          </footer>
        )}
      </div>
    )
  }
}

export default Card

Card.propTypes = {
  header: PropTypes.node,
  image: PropTypes.string,
  children: PropTypes.node,
  footerItems: PropTypes.node
}
