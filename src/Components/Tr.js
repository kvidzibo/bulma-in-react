import React, { PureComponent } from 'react'

export default class Tr extends PureComponent {
  render () {
    const {children = [], label, labels = []} = this.props
    return (
      <tr>
        {!!label && <th>{label}</th>}
        {!!labels.length && labels.map((l, key) => <th key={key}>{l}</th>)}
        {children.map ? children.map((c, key) => <td key={key}>{c}</td>) : <td>{children}</td>}
      </tr>
    )
  }
}
