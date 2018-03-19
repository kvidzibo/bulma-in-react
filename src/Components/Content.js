import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Content extends PureComponent {
  render () {
    const { children } = this.props
    return (
      <div className="content">{children}</div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node
}

export default Content
