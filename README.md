[![Join the chat at https://gitter.im/bulma-in-react/Lobby](https://badges.gitter.im/bulma-in-react/Lobby.svg)](https://gitter.im/bulma-in-react/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
# Components
* [Box](#box)
* [Button](#button)
* [Card](#card)
* [CardFooterItem](#cardfooteritem)
* [Content](#content)
* [Field](#field)
* [Hero](#hero)
* [Icon](#icon)
* [Input](#input)
* [Level](#level)
* [Loader](#loader)
* [Notification](#notification)
* [RangeField](#rangefield)
* [Section](#Section)
* [Textarea](#textarea)
* [Tile](#tile)
* [Tr](#tr)
## Box
| Properties    | Type |
| ------------- | ---- |
| children      | node |
## Button
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| fielded       | bool |
| loading       | bool |
| primary       | bool |
| success       | bool |
| info          | bool |
| link          | bool |
| warning       | bool |
| danger        | bool |
| outlined      | bool |
| inverted      | bool |
| rounded       | bool |
| hovered       | bool |
| focused       | bool |
| active        | bool |
| static        | bool |
| fullwidth     | bool |
| icon          | text |
## Card
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| header        | text |
| image         | text |
| footerItems   | []   |

items:
```
[<CardFooterItem />, <CardFooterItem />]
```
## CardFooterItem
| Properties    | Type |
| ------------- | ---- |
| children      | node |
## Content
| Properties    | Type |
| ------------- | ---- |
| children      | node |
## EqualColumns
| Properties    | Type |
| ------------- | ---- |
| children      | node |
## Field
| Properties    | Type |
| ------------- | -----|
| children      | node |
| uncontrolled  | bool |
| label         | text |
| error         | text |
| success       | text |
## FieldWithAddons
| Properties    | Type |
| ------------- | -----|
| children      | node |
| expanded      | node |
## Hero
| Properties    | Type |
| ------------- | ---- |
| title         | text |
| subtitle      | text |
| primary       | bool |
| success       | bool |
| info          | bool |
| link          | bool |
| warning       | bool |
| danger        | bool |
## Icon
| Properties    | Type |
| ------------- | ---- |
| icon          | text |

f.e. icon="github" will generate i.fa.fa-github
## Input
| Properties    | Type |
| ------------- | ---- |
| error         | bool |
| success       | bool |
| type          | text |
## Level
| Properties    | Type |
| ------------- | ---- |
| items         | []   |

items:
```
[{title: T1, heading: H1}, {title: T2, heading: H2}]
```
## Loader
| Properties    | Type |
| ------------- | ---- |
| active        | bool |
| size          | int  |
## Notification
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| primary       | bool |
| success       | bool |
| info          | bool |
| link          | bool |
| warning       | bool |
| danger        | bool |
## RangeField
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| seperator     | text |
## Section
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| title         | text |
| subtitle      | text |
## Select
| Properties    | Type |
| ------------- | ---- |
| options       | []   |
| fullwidth     | bool |
| placeholder   | text |

items:
```
[{label: l1, value: v1}]
```
## Textarea

normal textarea props
## Tile
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| title         | text |
| subtitle      | text |
## Tr
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| label         | text |
| labels        | []   |
