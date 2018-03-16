import React from 'react'
import { mount } from 'enzyme'
import { propToClass, control } from './utils'

import { Button } from '../../src/Components'

propToClass(Button, 'loading')
propToClass(Button, 'primary')
propToClass(Button, 'success')
propToClass(Button, 'info')
propToClass(Button, 'link')
propToClass(Button, 'warning')
propToClass(Button, 'danger')
propToClass(Button, 'outlined')
propToClass(Button, 'inverted')
propToClass(Button, 'rounded')
propToClass(Button, 'hovered')
propToClass(Button, 'focused')
propToClass(Button, 'active')

control(Button)

test('icon', () => {
  const comp = mount(<Button icon="add"/>)
  expect(comp.find('i.fa-add').length).toBe(1)
})
