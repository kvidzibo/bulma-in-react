import { textProps, propToClass } from './utils'
import { Hero as Comp } from '../../src/Components'

textProps(Comp, 'title')
textProps(Comp, 'subtitle')

propToClass(Comp, 'primary')
propToClass(Comp, 'success')
propToClass(Comp, 'info')
propToClass(Comp, 'link')
propToClass(Comp, 'warning')
propToClass(Comp, 'danger')
