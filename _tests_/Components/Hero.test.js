import { textProps, propToClass } from './utils'
import { Hero } from '../../src/Components'

textProps(Hero, 'title')
textProps(Hero, 'subtitle')

propToClass(Hero, 'primary')
propToClass(Hero, 'success')
propToClass(Hero, 'info')
propToClass(Hero, 'link')
propToClass(Hero, 'warning')
propToClass(Hero, 'danger')
