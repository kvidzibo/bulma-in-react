import React from 'react'
import { mount } from 'enzyme'
import './utils'
import { Level } from '../../src/Components'

test('displays correctly', () => {
  const component = mount(<Level items={[
    {heading: 'H1', title: 'T1'},
    {heading: 'H2', title: 'T2'}
  ]}/>)
  expect(component.find('.heading').length).toBe(2)
  expect(component.find('.heading').first().text()).toBe('H1')

  expect(component.find('.title').length).toBe(2)
  expect(component.find('.title').first().text()).toBe('T1')
})
