import React, { PureComponent } from 'react'
import Control from './Control'

export default class Field extends PureComponent {
  render () {
    const {
      children = null,
      label = '',
      error = '',
      success,
      uncontrolled
    } = this.props

    return (
      <div className='field control'>
        {label && <label className="label">{label}</label>}
        <Control control={!uncontrolled}>
          {children}
        </Control>
        {!!error && <p className="help is-danger">{error}</p>}
        {!!success && <p className="help is-success">{success}</p>}
      </div>
    )
  }
}
