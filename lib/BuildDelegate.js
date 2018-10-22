import DOMElementBuilder from './DOMElementBuilder'
import { DefaultLabels, DefaultLayout } from './Defaults'
import merge from 'deepmerge'
import mime from 'mime'

const element = (name) => DOMElementBuilder.create(name)

const defaults = (target = {}, source) => merge(source, target)

const link = ({ href, title, target, classNames }) =>
  element('a').atts({ href, title, class: classNames, target }).append(title)

const buildProto = {
  build: function () {
    const options = this.options || {}
    options.labels = defaults(options.labels, DefaultLabels)
    options.layout = defaults(options.layout, DefaultLayout)

    const doc = element('document', ...[ options.namespace, options.root ])
    const head = this.documentHead(element('head'), options)
    const body = this.documentBody(element('body'), options)

    // apply post html elements includes at the end
    if (options.postScripts) {
      this.buildPostElements(body, options)
    }

    doc.documentElement.appendChild(head.build())
    doc.documentElement.appendChild(body.build())
    return doc
  },

  documentHead: function (head, options) {

    // first append all important meta elements,
    // where charset has to be the very first
    const meta = options.meta || []
    if (!meta.find(el => !!el[ 'charset' ])) {
      meta.unshift({ charset: 'utf-8' })
    }
    meta.map(el => element('meta').atts(el).build()).forEach(el => head.append(el))

    // then add the title before applying the styles
    if (this.name) {
      head.append(element('title').append(this.name))
    }

    // add styles
    (options.styles || []).forEach(style => {
      let styleElement
      if (style.rel) {
        styleElement = element('link').atts(style)
      } else {
        styleElement = element('style').append(style)
      }
      head.append(styleElement)
    })

    return head
  },

  documentBody: function (body, options) {
    // our root container
    const container = element('div').atts({ class: [ 'container' ] })
    const title = this.titleSection(options)
    const sections = this.sections(options)

    container.append(title)
    container.append(sections)
    body.append(container)
    return body
  },

  titleSection (options) {

    const title = element('div').atts({ class: [ 'specs-title-area', 'text-center' ] })

    // create the headline, authors, version and date if present
    if (this._name) {
      title.append(element('h1').atts({ class: [ 'specs-headline' ] }).append(this._name))
    }

    // create link to the board
    if (this._url) {
      const urlElement = element('a').atts({ href: this._url, target: '_blank' }).append(this._url)
      title.append(element('div').append(urlElement))
    }

    if (this._dateLastActivity) {
      const lastActivity = new Date(this._dateLastActivity)
      title.append(element('div').append(lastActivity.toLocaleDateString()))
    }

    // create authors
    if (this._members) {
      title.append(element('strong').append(options.labels.authors))
      Object.values(this._members).forEach(member => {
        const memberElement = element('div')
          .atts({ id: member.idMember })
          .append(element('img').atts({ src: member.avatarUrl, height: 60, width: 60 }).class('img-thumbnail'))
          .append(element('span').append(member.fullName))
          .append(element('span').append(`(${member.username})`))
        title.append(memberElement)
      })
    }

    // old boards have a description
    if (this._desc) {
      title.append(element('p', this._desc))
    }

    return title
  },

  sections (options) {
    const listsRoot = element('div').class('lists-root')
    Object.values(this._lists).sort((a, b) => a.index - b.index).forEach(list => {
      const listAtts = {
        id: list.id,
        class: [ 'list-container' ]
      }
      let title = `${list.index + 1}. ${list.name}`
      if (list.closed) {
        listAtts.class.push('disabled')
        title += `(${options.labels.closed})`
      }
      const listContainer = element('div')
        .atts(listAtts)
        .append(element('h2')
          .class('text-center')
          .append(title))
        .append('hr')

      const cards = this.cards(list.id, options)
      cards.forEach(card => listContainer.append(card).append(element('p')))
      listsRoot.append(listContainer)
    })
    return listsRoot
  },

  cards (listId, options) {
    const cards = (this._cards[ listId ] || [])
    return cards
      .sort((a, b) => a.pos - b.pos)
      .map(card => this.card(card, options))
  },

  card (card, options) {
    const { closed } = card
    const cardRoot = element('div').class(`card ${options.layout.card.border ? '' : 'border-0'} clearfix ${closed ? 'disable' : ''}`)
    const cardBody = element('div').class('card-body')

    cardBody.append(this.cardHeader(card, options))
    cardBody.append(this.cardBody(card, options))

    if (options.layout.card.footer) {
      cardBody.append(this.cardFooter(card, options))
    }

    return cardRoot.append(cardBody)
  },

  cardHeader (card, options) {
    const layout = options.layout.card.header
    const cardTitle = element('h4')
    if (layout.title) {
      cardTitle
        .append(card.name)
        .class(layout.title.class)
    }

    if (layout.labels && card.labels) {
      const cardLabels = element('small').class(layout.labels.class)
      card.labels.forEach(label => {
        const labelElement = element('span')
          .class('badge text-white')
          .atts({ style: `background-color: ${label.color};` })
          .append(label.name)
        cardLabels.append(labelElement)
      })
      cardTitle.append(cardLabels)
    }
    if (layout.hr) {
      cardTitle.append('hr')
    }
    return cardTitle
  },

  cardBody (card, options) {
    const content = element('div')
    const layout = options.layout.card.body

    if (layout.desc && card.desc) {
      const cardDescription = element('div').append(card.desc, { isMarkdown: true })
      content.append(cardDescription)
    }

    if (layout.attachments && card.attachments && card.attachments.length > 0) {
      card.attachments.forEach(attachment => content.append(this.attachment(attachment, options)))
    }

    if (layout.checklists && card.idChecklists && card.idChecklists.length > 0) {
      card.idChecklists.forEach(checklistId => content.append(this.checklist(checklistId, options)))
    }

    return content
  },
  
  attachment (attachment, options) {
    const layout = options.layout.card.body.attachments

    /*
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
     */

    const attachmentContainer = element('div').class(layout.class)
    const attachmentLink = link({ href: attachment.url, title: attachment.name, target: '_blank' })
    let attachmentElement

    const mimeType = getMime(attachment.url)
    if (mimeType && mimeType.indexOf('image') > -1) {
      attachmentElement = element('img')
        .atts({
          class: layout.image.class,
          id: attachment.id,
          title: attachment.name,
          alt: attachment.name,
          src: attachment.url
        })
    } else {
      attachmentElement = element('div')
        .class(layout.other.class)
      attachmentElement.append(attachmentLink)
    }
    attachmentContainer.append(attachmentElement)

    if (layout.desc) {
      const attchmentDescription = element('div').class(layout.desc.class)
      const attachmentName = element('p').class('card-text').append(attachment.name)
      attchmentDescription.append(attachmentName)
      attachmentContainer.append(attachmentElement)
    }

    return attachmentContainer
  },

  checklist (checklistId, options) {
    const checkList = this._checkLists[ checklistId ]

    const checklistContainer = element('div')
    const checkListTitle = element('strong').append(checkList.name).wrap('p')
    checklistContainer.append(checkListTitle)

    const checkUl = element('ul').class('fa-ul')
    checkList.checkItems.map(item => checkUl.append(this.checklistItem(item, options)))
    checklistContainer.append(checkUl)

    return checklistContainer
  },

  checklistItem (item, options) {
    const layout = options.layout.card.body.checklists
    const listItem = element('li')

    if (layout.icons) {
      const listItemCheckState = element('i')
      if (layout.icons.complete && item.state === 'complete') {
        listItemCheckState.class(layout.icons.complete.class)
      }
      if (layout.icons.incomplete && item.state === 'incomplete') {
        listItemCheckState.class(layout.icons.incomplete.class)
      }
      listItem.append(listItemCheckState)
    }

    if (layout.label) {
      const listItemLabel = element('span').append(item.name)
      if (layout.label.complete && item.state === 'complete') {
        listItemLabel.class(layout.label.complete.class)
      }
      if (layout.label.incomplete && item.state === 'incomplete') {
        listItemLabel.class(layout.label.incomplete.class)
      }
      listItem.append(listItemLabel)
    }

    return listItem
  },

  cardFooter (card, options) {
    const cardUpdates = element('div').class('clearfix')
    const layout = options.layout.card.footer

    if (layout.hr) {
      cardUpdates.append('hr')
    }

    // add all card contributors as inner-doc-anchors <a>
    // to the original author description at the top
    // using bs 4 inline list:
    //
    // <ul class="list-inline">
    //  <li class="list-inline-item"><a class="social-icon text-xs-center" target="_blank" href="#">FB</a></li>
    //  <li class="list-inline-item"><a class="social-icon text-xs-center" target="_blank" href="#">G+</a></li>
    //  <li class="list-inline-item"><a class="social-icon text-xs-center" target="_blank" href="#">T</li>
    // </ul>
    //
    if (card.idMembers && card.idMembers.length > 0) {
      const cardMembers = element('ul').class('list-inline')
      const cardMembersLabel = element('li')
        .class('list-inline-item')
        .append(options.labels.members)
      cardMembers.append(cardMembersLabel)

      card.idMembers.map(memberId => {
        const member = this._members[ memberId ]
        const memberElement = element('a')
          .atts({ href: 'javascript:;', onclick: `document.location.hash='${memberId}'` })
          .append(member.fullName)
        cardMembers.append(memberElement).append(element('span').append(' '))
      })

      cardUpdates.append(cardMembers.wrap('small').class('float-right'))
    }

    // finally add the timestamp when this card was last updated
    const lastUpdatedStr = `${options.labels.lastActivity}: ${new Date(card.dateLastActivity).toLocaleDateString()}`
    const lastUpdate = element('small')
      .class('text-muted')
      .append(lastUpdatedStr)
    cardUpdates.append(lastUpdate)

    // add due
    if (card.due) {
      const dueDate = new Date(card.due)
      const dueStr = `${options.labels.due}: ${dueDate.toLocaleDateString()}`
      const due = element('small').append(dueStr)
      const bagde = element('span')
      if (card.dueComplete) {
        bagde.class('badge badge-success')
      } else if (isEnded(dueDate)) {
        bagde.class('badge badge-danger')
      } else {
        bagde.class('badge badge-secondary')
      }
      bagde.append(due)
      cardUpdates.append(bagde.wrap('div'))
    }

    return cardUpdates
  },

  buildPostElements: function (body, options) {
    options.postScripts.forEach(script => {
      let scriptElement
      if (script.src) {
        scriptElement = element('script').atts(script)
      } else {
        scriptElement = element('script').append(script)
      }
      body.append(scriptElement)
    })
    return body
  },

}

/**
 * let a builer delegate the build process to this class so we have a clean
 * seperation of model and creation and a better code overview.
 */
export const delegate = (builder) => {
  const _delegate = Object.assign({}, buildProto)
  _delegate.prototype = builder.prototype
  return Object.assign({}, builder, _delegate)
}

function isEnded (date) {
  return date.getTime() - new Date().getTime() <= 0
}

function getMime (str) {
  const split = str && str.split('.')
  const ext = split && split[ split.length - 1 ]
  return mime.getType(ext)
}