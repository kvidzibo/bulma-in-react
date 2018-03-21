import { propToClass } from './utils'

import { Button as Comp } from '../../src/Components'

propToClass(Comp, 'loading')
propToClass(Comp, 'primary')
propToClass(Comp, 'success')
propToClass(Comp, 'info')
propToClass(Comp, 'link')
propToClass(Comp, 'warning')
propToClass(Comp, 'danger')
propToClass(Comp, 'outlined')
propToClass(Comp, 'inverted')
propToClass(Comp, 'rounded')
propToClass(Comp, 'hovered')
propToClass(Comp, 'focused')
propToClass(Comp, 'active')
propToClass(Comp, 'static')
propToClass(Comp, 'fielded', '.field')
propToClass(Comp, {icon: 'add'}, 'i.fa-add')
