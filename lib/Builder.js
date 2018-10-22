const e = () => { throw new Error('Unexpected call to abstract method') }

export default class Builder {
  constructor (options) {
    this.options = options
  }

  each (arr, fct) {
    const self = this
    arr.forEach(el => fct.call(self, el))
  }

  build () { e() }

  // ////////////////////////////////////////////////////////////////////
  //
  // BOARD-GLOBALS / META
  //
  // ////////////////////////////////////////////////////////////////////

  static method (name) {
    return (typeof Builder[ name ] === 'function')
  }

  method (name) {
    return (typeof this[ name ] === 'function')
  }

  id (str) { e() }

  name (str) { e() }

  desc (str) { e() }

  descData (obj) { e() }

  closed (value) { e() }

  idOrganization (str) { e() }

  invited (value) { e() }

  limits (obj) { e() }

  pinned (value) { e() }

  starred (value) { e() }

  url (str) { e() }

  shortUrl (str) { e() }

  prefs (obj) { e() }

  invitations (arr) { this.each(arr, this.invitation) }

  invitation (obj) { e() }

  shortLink (str) { e() }

  subscribed (value) { e() }

  dateLastActivity (str) { e() }

  datePluginDisable (value) { e() }

  creationMethod (str) { e() }

  // ////////////////////////////////////////////////////////////////////
  //
  // Labels
  //
  // ////////////////////////////////////////////////////////////////////

  labelNames (obj) { e() }

  labels (arr) { this.each(arr, this.label) }

  label (cardId, str) { e() }

  // ////////////////////////////////////////////////////////////////////
  //
  // MEMBERS
  //
  // ////////////////////////////////////////////////////////////////////

  members (arr) { this.each(arr, this.member) }

  member (obj) { e() }

  memberships (arr) { this.each(arr, this.membership) }

  membership (obj) { e() }

  // ////////////////////////////////////////////////////////////////////
  //
  // Lists / Cards
  //
  // ////////////////////////////////////////////////////////////////////

  lists (arr = []) { this.each(arr, this.list) }

  list (obj) { e() }

  cards (arr = []) { this.each(arr, this.card) }

  card (obj) { e() }

  // ////////////////////////////////////////////////////////////////////
  //
  // Checklists
  //
  // ////////////////////////////////////////////////////////////////////

  checklists (arr) { this.each(arr, this.checklist) }

  checklist (obj) { e() }

  // ////////////////////////////////////////////////////////////////////
  //
  // MISC
  //
  // ////////////////////////////////////////////////////////////////////

  powerUps (arr) { this.each(arr, this.powerup) }

  powerUp (obj) { e() }

  idTags (arr) { this.each(arr, this.idTag) }

  idTag (obj) { e() }

  actions (arr) { this.each(arr, this.action) }

  action (obj) { e() }

  customFields (arr) { e() }

  customField (obj) { e() }

  pluginData (arr) { e() }

}
