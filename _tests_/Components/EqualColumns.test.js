import React from 'react'
import './utils'
import { mount } from 'enzyme'
import { EqualColumns as Comp } from '../../src/Components'

test('renders correctly', () => {
  const comp = mount(<Comp><span>T1</span><span>T2</span></Comp>)
  expect(comp.find('.column').length).toBe(2)
  expect(comp.find('.column').at(0).text()).toBe('T1')
  expect(comp.find('.column').at(1).text()).toBe('T2')
})
