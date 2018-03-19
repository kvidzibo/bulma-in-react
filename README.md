### Gitter https://gitter.im/bulma-in-react/Lobby
# Components
* [Box](#Box)
* [Button](#Button)
* [Card](#Card)
* [CardFooterItem](#CardFooterItem)
* [Content](#Content)
* [Field](#Field)
* [Hero](#Hero)
* [Icon](#Icon)
* [Input](#Input)
* [Level](#Level)
* [Loader](#Loader)
* [Notification](#Notification)
* [RangeField](#RangeField)
* [Textarea](#Textarea)
* [Tile](#Tile)
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
## Field
| Properties    | Type |
| ------------- | -----|
| children      | node |
| uncontrolled  | bool |
| label         | text |
| error         | text |
| success       | text |
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
## Textarea

normal textarea props
## Tile
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| title         | text |
| subtitle      | text |
