import Builder from './Builder'
import { delegate } from './BuildDelegate'

export default class DocumentBuilder extends Builder {

  build () {
    return delegate(this).build()
  }

  id (str) {
    this._id = str
    return this
  }

  name (str) {
    this._name = str
    return this
  }

  desc (str) {
    this._desc = str
    return this
  }

  descData (obj) {
    this._descData = obj
    return this
  }

  closed (value) {
    this._closed = value
    return this
  }

  idOrganization (str) {
    this._idOrganization = str
    return this
  }

  invited (value) {
    this._invited = value
    return this
  }

  limits (obj) {
    this._limits = obj
    return this
  }

  pinned (value) {
    this._pinned = value
    return this
  }

  starred (value) {
    this._starred = value
    return this
  }

  url (str) {
    this._url = str
    return this
  }

  shortUrl (str) {
    this._shortUrl = str
    return this
  }

  prefs (obj) {
    this._prefs = obj
    return this
  }

  invitation (obj) {
    return this
  }

  shortLink (str) {
    this._shortLink = str
  }

  subscribed (value) {
    this._subscribed = value
  }

  dateLastActivity (str) {
    this._dateLastActivity = str
    return this
  }

  datePluginDisable (value) {
    this._datePluginDisable = value
  }

  creationMethod (str) {
    this._creationMethod = str
  }

  labelNames (obj) {
    this._labelNamed = obj
    return this
  }

  label (cardId, str) {
    return this
  }

  member (obj) {
    if (!this._members) {
      this._members = {}
    }
    if (this._members[ obj.id ]) {
      this._members[ obj.id ] = Object.assign({}, this._members[ obj.id ], obj)
    } else {
      this._members[ obj.id ] = obj
    }
    return this
  }

  membership (obj) {
    if (!this._members) {
      this._members = {}
    }
    if (this._members[ obj.idMember ]) {
      this._members[ obj.idMember ] = Object.assign({}, this._members[ obj.idMember ], obj)
    } else {
      this._members[ obj.idMember ] = obj
    }
    return this
  }

  // ////////////////////////////////////////////////////////////////////
  //
  // Lists / Cards
  //
  // ////////////////////////////////////////////////////////////////////

  list (obj) {
    if (!this._lists) {
      this._lists = {}
      this._listCount = 0
    }
    this._lists[ obj.id ] = Object.assign({}, obj, { index: this._listCount++ })
    return this
  }

  card (obj) {
    if (!this._cards) {
      this._cards = {}
    }
    if (this._cards[ obj.idList ]) {
      this._cards[ obj.idList ].push(obj)
    } else {
      this._cards[ obj.idList ] = [ obj ]
    }
    return this
  }

  // ////////////////////////////////////////////////////////////////////
  //
  // Checklists
  //
  // ////////////////////////////////////////////////////////////////////

  checklist (obj) {
    if (!this._checkLists) {
      this._checkLists = {}
    }
    this._checkLists[ obj.id ] = obj
    return this
  }

  // ////////////////////////////////////////////////////////////////////
  //
  // MISC
  //
  // ////////////////////////////////////////////////////////////////////

  powerUp (obj) { return this }

  idTag (obj) { return this }

  action (obj) { return this }

  customFields (arr) { return this }

  customField (obj) { return this }

  pluginData (arr) { return this }
}
