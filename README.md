# Components
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
## Field
| Properties    | Type |
| ------------- | -----|
| children      | node |
| uncontrolled  | bool |
| label         | text |
| error         | text |
| success       | text |
## Content
| Properties    | Type |
| ------------- | ---- |
| children      | node |
## Box
| Properties    | Type |
| ------------- | ---- |
| children      | node |
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
## Tile
| Properties    | Type |
| ------------- | ---- |
| children      | node |
| title         | text |
| subtitle      | text |
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
## Level
| Properties    | Type |
| ------------- | ---- |
| items         | []   |

items:
```
[{title: T1, heading: H1}, {title: T2, heading: H2}]
```
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
