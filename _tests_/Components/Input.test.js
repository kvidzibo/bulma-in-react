import { emptyRender, propToClass } from './utils'
import { Input } from '../../src/Components'

emptyRender(Input, 'input.input')
propToClass(Input, 'error', '.is-danger')
propToClass(Input, 'success', '.is-success')
