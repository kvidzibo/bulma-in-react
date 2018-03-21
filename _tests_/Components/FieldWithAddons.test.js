import React from 'react'
import './utils'
import { mount } from 'enzyme'
import { FieldWithAddons as Comp } from '../../src/Components'

test('renders correctly', () => {
  const comp = mount(<Comp><span>T1</span><span>T2</span></Comp>)
  expect(comp.find('.control').length).toBe(2)
  expect(comp.find('.control').at(0).text()).toBe('T1')
  expect(comp.find('.control').at(1).text()).toBe('T2')
})

test('renders correctly with expanded', () => {
  const comp = mount(<Comp expanded><span>T1</span><span>T2</span></Comp>)
  expect(comp.find('.is-expanded').length).toBe(1)
  expect(comp.find('.control').at(0).text()).toBe('T1')
  expect(comp.find('.control').at(1).text()).toBe('T2')
})
