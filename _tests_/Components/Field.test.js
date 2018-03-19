import { children, textProps, propToClass } from './utils'
import { Field as Comp } from '../../src/Components'

children(Comp)

textProps(Comp, 'label')
textProps(Comp, 'error', '.is-danger')
textProps(Comp, 'success', '.is-success')
propToClass(Comp, 'uncontrolled', '.control', 1)
propToClass(Comp, '', '.control', 2)
