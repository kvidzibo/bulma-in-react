import React, { PureComponent } from 'react'

export default class Tile extends PureComponent {
  render () {
    const { children, title = '', subtitle = '' } = this.props
    return (
      <div className="tile is-ancestor container is-fluid">
        <div className="tile is-parent">
          <article className="tile is-child box">
            {title && <p className="title">{title}</p>}
            {subtitle && <p className="subtitle">{subtitle}</p>}
            {children}
          </article>
        </div>
      </div>
    )
  }
}
