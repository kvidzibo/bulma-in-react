import { propToClass, toBeNull } from './utils'
import { Loader as Comp } from '../../src/Components'

propToClass(Comp, 'active', '.fa-spinner')
propToClass(Comp, {active: true, size: 2}, '.fa-spinner.fa-2x')
toBeNull(Comp, {active: false})
