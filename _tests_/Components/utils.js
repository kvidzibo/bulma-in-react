import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

beforeAll(() => {
  configure({ adapter: new Adapter() })
})

export const propToClass = (Component, prop, className = false, number = 1, debug = false) => {
  test(`adds class for ${prop}`, () => {
    const component = typeof prop === 'object'
      ? mount(<Component {...prop}/>) : mount(<Component {...{[prop]: true}}/>)
    debug && console.log(component.debug())
    expect(component.find(className || `.is-${prop}`).length).toBe(number)
  })
}

export const children = (Component) => {
  test(`displays children`, () => {
    const component = mount(<Component>test</Component>)
    expect(component.text()).toBe('test')
  })
}

export const textProps = (Component, prop, selector) => {
  test(`displays test in ${selector} because of ${prop} passed`, () => {
    const component = mount(<Component {...{[prop]: 'test'}}/>)
    selector
      ? expect(component.find(selector).text()).toBe('test') : expect(component.text()).toBe('test')
  })
}

export const emptyRender = (Component, selector, number = 1, debug = 0) => {
  test(`has ${selector}`, () => {
    const component = mount(<Component />)
    debug && console.log(component.debug())
    expect(component.find(selector).length).toBe(number)
  })
}
