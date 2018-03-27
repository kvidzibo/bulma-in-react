import React from 'react'
import './utils'
import { mount } from 'enzyme'
import { Select as Comp } from '../../src/Components'

test('renders correctly', () => {
  const comp = mount(<Comp options={[{label: 'l1', value: 'v1'}]}/>)
  expect(comp.find('div.select').length).toBe(1)
  expect(comp.find('option').length).toBe(1)
})

test('use palceholder', () => {
  const comp = mount(<Comp placeholder="ph" options={[{label: 'l1', value: 'v1'}]}/>)
  expect(comp.find('div.select').length).toBe(1)
  expect(comp.find('option').length).toBe(2)
  expect(comp.find('option[disabled]').length).toBe(1)
})
