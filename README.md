# ShareCard.js
A lite framework for Webapp &amp; WeApp to create share card image in frontend.

## Getting Started

### Installation

### Quick Start
```javascript

const card = new ShareCard({
  style: {
    width: 1200,
    height: 800
  },
  elems: [
    {
      type: 'text',
      value: '123123',
      style: {
        align: 'center',
        top: 20
      }
    }, {
      type: 'image',
      value: '../url',
      style: {
        width: 100,
        height: 100
      }
    }
  ]
})

const textNode = new TextNode({
  style: {},
  value: 'xxxxxx'
})

card.append(textNode)

card.exportBase64('png' | 'jpg', 100 /* jpeg quality */)
card.exportBlob()
```

### NodeType


## Options
### style

### elems

## Support Property

* width
* height
* background
* fontSize
* font
* color
* align
* top
* right
* bottom
* left

## License
ShareCard.js is licensed under a [MIT License](./LICENSE).
