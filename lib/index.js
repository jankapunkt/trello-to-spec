import '@babel/polyfill'
import DocumentBuilder from './DocumentBuilder'
import { ClassMapping } from './ClassMapping'
import Builder from './Builder'

let _concreteBuilder = DocumentBuilder
let _mapping = ClassMapping

const trello2doc = {
  async construct (boardData, options) {
    const builder = new _concreteBuilder(options)
    Object.keys(boardData).forEach(key => {
      const mapValue = _mapping.fields[ key ]
      if (!mapValue || mapValue.use === false) {
        console.info(`skipping field ${key}`)
        return
      }
      console.log(`field: ${key}`)
      const boardValue = boardData[ key ]
      try {
        builder[ key ](boardValue)
      } catch (e) {
        console.log(e.message, key, typeof builder[ key ])
      }
    })
    return builder.build()
  },
  setBuilder (ConcreteBuilder) {
    _concreteBuilder = ConcreteBuilder
  },
  getBuilder () {
    return _concreteBuilder
  },
  getBuilderDefault () {
    return DocumentBuilder
  },
  getBuilderAbstract () {
    return Builder
  },
  setMapping (mapping) {
    _mapping = mapping
  },
  getMapping () {
    return _mapping
  },
  getMappingDefault () {
    return ClassMapping
  }
}

export { trello2doc as default }
