import { children, textProps, propToClass } from './utils'
import { Field } from '../../src/Components'

children(Field)

textProps(Field, 'label')
textProps(Field, 'error', '.is-danger')
textProps(Field, 'success', '.is-success')
propToClass(Field, 'uncontrolled', '.control', 1)
propToClass(Field, '', '.control', 2)
