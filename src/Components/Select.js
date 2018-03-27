import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Select extends PureComponent {
  render () {
    const {
      options,
      fullwidth,
      placeholder,
      ...otherProps
    } = this.props
    const classname = classnames({
      select: 1,
      'is-fullwidth': fullwidth
    })
    return (
      <div className={classname}>
        <select {...otherProps}>
          {!!placeholder && <option disabled value=''>{placeholder}</option>}
          {options.map((o, k) => (<option key={k} value={o.value}>{o.label}</option>))}
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default Select
