import React from 'react'
import { shallow } from 'enzyme'
import '../utils'

import { Button } from '../../src/Components'

test('displays childern', () => {
  const { component, tree } = shallow(<Button>test</Button>)
  expect(component.text()).toEqual('test')
  expect(tree).toMatchSnapshot()
})
