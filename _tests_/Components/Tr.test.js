import React from 'react'
import './utils'
import { mount } from 'enzyme'
import { Tr as Comp } from '../../src/Components'

test(`displays children`, () => {
  const component = mount(<table><tbody><Comp>test</Comp></tbody></table>)
  expect(component.text()).toBe('test')
  expect(component.find('td').length).toBe(1)
})

test(`displays label`, () => {
  const component = mount(<table><tbody><Comp label="testL">test</Comp></tbody></table>)
  expect(component.find('td').text()).toBe('test')
  expect(component.find('th').text()).toBe('testL')
  expect(component.find('td').length).toBe(1)
  expect(component.find('th').length).toBe(1)
})

test(`displays labels`, () => {
  const component = mount(<table><tbody><Comp labels={['test1', 'test2']}/></tbody></table>)
  expect(component.text()).toBe('test1test2')
  expect(component.find('th').length).toBe(2)
})

test(`displays multi children`, () => {
  const component = mount(<table><tbody><Comp><span>test1</span><span>test2</span></Comp></tbody></table>)
  expect(component.text()).toBe('test1test2')
  expect(component.find('td').length).toBe(2)
})
