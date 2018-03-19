import { emptyRender, propToClass } from './utils'
import { Input as Comp } from '../../src/Components'

emptyRender(Comp, 'input.input')
propToClass(Comp, 'error', '.is-danger')
propToClass(Comp, 'success', '.is-success')
