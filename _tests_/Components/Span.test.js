import { propToClass, children } from './utils'

import { Span as Comp } from '../../src/Components'

children(Comp)

propToClass(Comp, 'capitalized')
propToClass(Comp, 'lowercase')
propToClass(Comp, 'uppercase')
propToClass(Comp, 'italic')
propToClass(Comp, 'bold', '.has-text-weight-bold')
propToClass(Comp, 'danger', '.has-text-danger')
propToClass(Comp, 'warning', '.has-text-warning')
propToClass(Comp, 'success', '.has-text-success')
propToClass(Comp, 'primary', '.has-text-primary')
