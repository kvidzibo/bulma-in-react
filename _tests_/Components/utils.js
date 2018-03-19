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

export const numberOfChildren = (Component, number = 1, debug = false) => {
  test(`requires specific ${number} children`, () => {
    const children = []
    for (var i = 0; i < number; i++) {
      children.push(<span key={i} className="children">{i}</span>)
    }
    const component = mount(
      <Component>
        {children}
      </Component>
    )
    debug && console.log(component.debug())
    expect(component.find('.children').length).toBe(number)
  })

  test(`throws error if not ${number} children is provided`, () => {
    global.console = {error: jest.fn()}
    const children = []
    for (var i = 0; i < number - 1; i++) {
      children.push(<span key={i} className="children">{i}</span>)
    }
    mount(<Component>{children}</Component>)
    expect(global.console.error.mock.calls.length).toBe(1)
  })
}

export const textProps = (Component, prop, selector, debug = false) => {
  test(`displays test in ${selector} because of ${prop} passed`, () => {
    const component = mount(<Component {...{[prop]: 'test'}}/>)
    debug && console.log(component.debug())
    selector
      ? expect(component.find(selector).text()).toBe('test') : expect(component.text()).toBe('test')
  })
}

export const toBeNull = (Component, props) => {
  test(`onClick`, () => {
    const component = mount(<Component {...props} />)
    expect(component.html()).toBe(null)
  })
}

export const emptyRender = (Component, selector, number = 1, debug = 0) => {
  test(`has ${selector}`, () => {
    const component = mount(<Component />)
    debug && console.log(component.debug())
    expect(component.find(selector).length).toBe(number)
  })
}

export const click = (Component) => {
  test(`onClick`, () => {
    const onClick = jest.fn()
    const component = mount(<Component onClick={onClick} />)
    component.find(Component).simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
}
