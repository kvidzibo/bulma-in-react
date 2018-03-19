import React, { PureComponent } from 'react'

export default class Textarea extends PureComponent {
  render () {
    return (
      <textarea className="textarea" style={{resize: 'none'}} {...this.props}/>
    )
  }
}
