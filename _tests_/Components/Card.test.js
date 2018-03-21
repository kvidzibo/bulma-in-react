import { children, textProps, propToClass } from './utils'
import { Card as Comp } from '../../src/Components'

children(Comp)

textProps(Comp, 'header', '.card-header-title')

propToClass(Comp, {image: 'someItem'}, '.image img')
propToClass(Comp, {footerItems: [null]}, '.card-footer')
