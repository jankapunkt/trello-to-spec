/* global describe it assert */

/*
Attaches bootstrap classes to createsd elements, determined by Mapping
Allows to pass in a different Mapping
Allows to pass in a custom Builder
*/
import { assert } from 'chai'
import trello2doc from './index.js'
import exampleBoard from '../debug/example.json'
import fs from 'fs'

describe('Builder API', function () {
  it('Takes a Trello board\'s JSON data and builds a new Document\n', function (done) {
    trello2doc.construct(exampleBoard, {
      layout: {

      },
      styles: [
        {
          rel: 'stylesheet',
          href: 'style.css'
        },
        {
          rel: 'stylesheet',
          href: 'font-awesome-4.7.0/css/font-awesome.css'
        }
      ],
      postScripts: [
        {
          src: 'jquery.js',
        },
        {
          src: 'popper.js',
        },
        {
          src: 'bsjs.js',
        }
      ]
    }).then(document => {
      assert.isDefined(document)
      assert.isDefined(document.documentElement)
      assert.isDefined(document.documentElement.outerHTML)
      assert.isDefined(document.head)
      assert.isDefined(document.body)
      fs.writeFile(process.cwd() + '/debug/example.html', `<!DOCTYPE html>${document.documentElement.outerHTML}`, function (err) {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
    }).catch(e => done(e))
  })
})
