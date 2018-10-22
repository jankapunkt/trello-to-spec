import ElementBuilder from './ElementBuilder'
import marked from 'marked'
import htmlTagNames from 'html-tag-names'

const jsdom = require('jsdom')
const { JSDOM } = jsdom

const { document } = (new JSDOM(`<!DOCTYPE html>`, { resources: void 0 })).window

const tagMap = {}
htmlTagNames.forEach(tag => tagMap[ tag ] = true)

const isTag = name => tagMap[ name ]

export default class DOMElementBuilder extends ElementBuilder {
  constructor (name) {
    super()
    this.node = document.createElement(name)
  }

  build () {
    return this.node
  }

  static create (name, ...optionalArgs) {
    if (name === 'document') {
      const nameSpace = optionalArgs[ 0 ] || 'http://www.w3.org/1999/xhtml'
      const qualifiedStr = optionalArgs[ 1 ] || 'html'
      return document.implementation.createDocument(nameSpace, qualifiedStr, null)
    }
    return new DOMElementBuilder(name)
  }

  static isNode (value) {
    //
    return typeof value === 'object' && typeof value[ 'isDefaultNamespace' ] === 'function'
  }

  atts (attributes) {
    Object.keys(attributes).forEach(attKey => {
      let att = attributes[ attKey ]
      if (Array.isArray(att)) {
        att = attributes[ attKey ].join(' ')
      } else {
        att = attributes[ attKey ]
      }
      this.att(attKey, att)
    })
    return this
  }

  att (key, val) {
    this.node.setAttribute(key, val)
    return this
  }

  class (value) {
    this.atts({ class: value })
    return this
  }

  append (value, options) {
    if (typeof value === 'string') {
      let appendNode

      if (isTag(value)) {
        appendNode = DOMElementBuilder.create(value)
        this.append(appendNode)
        return this
      } else if (options && options.isMarkdown) {
        appendNode = document.createElement('div')
        const tokens = marked.lexer(value)
        const html = marked.parser(tokens)
        appendNode.appendChild(createElementFromHTML(html))
      } else {
        appendNode = document.createTextNode(value)
      }
      this.node.appendChild(appendNode)
      return this
    } else if (DOMElementBuilder.isNode(value)) {
      this.node.appendChild(value)
      return this
    } else if (value instanceof DOMElementBuilder) {
      this.node.appendChild(value.build())
      return this
    }
    console.warn('no option found for value ', value)
    return this
  }

  wrap (value) {
    const wrap = DOMElementBuilder.isNode(value) ? value : DOMElementBuilder.create(value)
    wrap.append(this)
    return wrap
  }
}

// credits: https://stackoverflow.com/a/494348/3098783
function createElementFromHTML (htmlString) {
  var div = document.createElement('div')
  div.innerHTML = htmlString.trim()

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild
}
