import Builder from './Builder'

export const ClassMapping = {
  values (mapValue, boardValue) {

  },
  fields: {
    id: {
      use: true,
      type: String,
    },
    name: {
      use: true,
      type: String,
    },
    desc: {
      use: true,
      type: String,
    },
    descData: {
      use: true,
      type: Object,
    },
    closed: {
      use: true,
      type: Boolean,
    },
    idOrganization: {
      use: true,
      type: String,
    },
    invited: {
      use: true,
      type: String,
    },
    /*
  TODO figure out if this has meaning for export
    limits: {
      'attachments': {
        'perBoard': {
          'status': 'ok',
          'disableAt': 34200,
          'warnAt': 32400
        }
      },
      'boards': {
        'totalMembersPerBoard': {
          'status': 'ok',
          'disableAt': 1520,
          'warnAt': 1440
        }
      },
      'cards': {
        'openPerBoard': {
          'status': 'ok',
          'disableAt': 4750,
          'warnAt': 4500
        },
        'totalPerBoard': {
          'status': 'ok',
          'disableAt': 1900000,
          'warnAt': 1800000
        }
      },
      'checklists': {
        'perBoard': {
          'status': 'ok',
          'disableAt': 1900000,
          'warnAt': 1800000
        }
      },
      'customFields': {
        'perBoard': {
          'status': 'ok',
          'disableAt': 48,
          'warnAt': 45
        }
      },
      'labels': {
        'perBoard': {
          'status': 'ok',
          'disableAt': 950,
          'warnAt': 900
        }
      },
      'lists': {
        'openPerBoard': {
          'status': 'ok',
          'disableAt': 475,
          'warnAt': 450
        },
        'totalPerBoard': {
          'status': 'ok',
          'disableAt': 2850,
          'warnAt': 2700
        }
      }
    },
    */
    pinned: {
      use: true,
      type: Boolean
    },
    starred: {
      use: true,
      type: Boolean,
    },
    url: {
      use: true,
      type: String,
    },
    prefs: {
      permissionLevel: {
        use: true,
        type: Boolean
      },
      voting: {
        use: true,
        type: String,
      },
      comments: {
        use: true,
        type: String,
      },
      invitations: {
        use: true,
        type: String
      },
      selfJoin: {
        use: true,
        type: String,
      },
      cardCovers: {
        use: true,
        type: Boolean,
      },
      cardAging: {
        use: true,
        type: String,
      },
      calendarFeedEnabled: {
        use: true,
        type: String,
      },
      background: {
        use: true,
        type: String, // id ref -> '5b9bb9c5b3c9134da9ab3cbf'
      },
      backgroundImage: {
        use: true,
        type: String, // usually aws s3 url
      },
      backgroundImageScaled: {
        use: true,
        type: Array
      },
      backgroundTile: {
        use: true,
        type: String
      },
      backgroundBrightness: {
        use: true,
        type: String
      },
      'backgroundBottomColor': '#f4f3f2',
      'backgroundTopColor': '#fcfcfc',
      'canBePublic': true,
      'canBeOrg': true,
      'canBePrivate': true,
      'canInvite': true
    },
    'invitations': [],
    'shortLink': 'Yod3k5kQ',
    'subscribed': false,
    'labelNames': {
      'green': 'Complete',
      'yellow': 'In revision',
      'orange': 'Requires revision',
      'red': 'Should be removed',
      'purple': 'Is removed',
      'blue': 'Is issue',
      'sky': '',
      'lime': '',
      'pink': '',
      'black': 'Is technical note'
    },
    'powerUps': [],
    'dateLastActivity': '2018-10-08T09:31:27.634Z',
    'dateLastView': '2018-10-08T12:34:58.750Z',
    'shortUrl': 'https://trello.com/b/Yod3k5kQ',
    'idTags': [],
    'datePluginDisable': null,
    'creationMethod': null,
    'actions': [
      {
        'id': '5bbb23814906880d4a855dde',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': '46BaNvEI',
            'idShort': 10,
            'name': 'Log In Form',
            'id': '5bbb19389e9b5078dfabaebc',
            'closed': true
          },
          'old': {
            'closed': false
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:29:37.934Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb232fcd20522e8ef33ac1',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'yoFpuTiZ',
            'idShort': 20,
            'name': 'Scenario 3: E.T.',
            'id': '5bbb22b495857e292ef58e58'
          },
          'text': 'Can be removed since he already got home\n'
        },
        'type': 'commentCard',
        "dateLastActivity": '2018-10-08T09:28:15.047Z',
        'limits': {
          'reactions': {
            'perAction': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            },
            'uniquePerAction': {
              'status': 'ok',
              'disableAt': 17,
              'warnAt': 16
            }
          }
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2324cf5a644db53c65d5',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'yoFpuTiZ',
            'idShort': 20,
            'name': 'Scenario 3: E.T.',
            'id': '5bbb22b495857e292ef58e58',
            'desc': 'E.T. wants to call home but can only reach home at a certain time. E.T. found out by his new human friend, that **WhatTimeIsIt.com** helps him to determine. By his super alien powers he registered, logged in, set the timezone and auto-retrieved the time every second using his super-mind-external-api-consumer service.\n'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:28:04.845Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb22b495857e292ef58e59',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'card': {
            'shortLink': 'yoFpuTiZ',
            'idShort': 20,
            'name': 'Scenario 3: E.T.',
            'id': '5bbb22b495857e292ef58e58'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:26:12.753Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb22546ca17b30e1422a8e',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'u8bbcigV',
            'idShort': 18,
            'name': 'Open issues',
            'id': '5bbb219381e13b12142af24e'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:24:36.969Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb22518ba2dd59385757aa',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'HQUEvrju',
            'idShort': 17,
            'name': 'Server side checks',
            'id': '5bbb2173a89b4e672dde24df'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:24:33.808Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb224dcd76fd728655bec7',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'V4pVqC8l',
            'idShort': 19,
            'name': 'Use input field type password',
            'id': '5bbb21c9a456f64cb4567727'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:24:29.867Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb22103ae06c47afeee1dc',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'V4pVqC8l',
            'idShort': 19,
            'name': 'Use input field type password',
            'id': '5bbb21c9a456f64cb4567727',
            'pos': 163839
          },
          'old': {
            'pos': 327679
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:23:28.512Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb220b347195864d2260e8',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'JTAQXVWN',
            'idShort': 16,
            'id': '5bbb210d7833df6c0c2055af',
            'name': 'UI Description'
          },
          'old': {
            'name': 'Example Screen'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:23:23.288Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb21f0a107dd5527fe4a51',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Descriptions',
            'id': '5bbb21f0a107dd5527fe4a50'
          },
          'card': {
            'shortLink': 'JTAQXVWN',
            'idShort': 16,
            'name': 'Example Screen',
            'id': '5bbb210d7833df6c0c2055af'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:22:56.708Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb21c9a456f64cb4567728',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'card': {
            'shortLink': 'V4pVqC8l',
            'idShort': 19,
            'name': 'Use input field type password',
            'id': '5bbb21c9a456f64cb4567727'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:22:17.400Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb219dec155c21544f272a',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'id': '5bbb219aeac8605d2baefd9b',
            'name': 'Open'
          },
          'old': {
            'name': 'Checkliste'
          }
        },
        'type': 'updateChecklist',
        "dateLastActivity": '2018-10-08T09:21:33.025Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb219aeac8605d2baefd9c',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Checkliste',
            'id': '5bbb219aeac8605d2baefd9b'
          },
          'card': {
            'shortLink': 'u8bbcigV',
            'idShort': 18,
            'name': 'Open issues',
            'id': '5bbb219381e13b12142af24e'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:21:30.157Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb219381e13b12142af24f',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'card': {
            'shortLink': 'u8bbcigV',
            'idShort': 18,
            'name': 'Open issues',
            'id': '5bbb219381e13b12142af24e'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:21:23.775Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2181f0432068e1e7be86',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'id': '5bbb2177c300cb08f6cadced',
            'name': 'When the user clicks Log In, the following checks are performed on the server:'
          },
          'old': {
            'name': 'Checkliste'
          }
        },
        'type': 'updateChecklist',
        "dateLastActivity": '2018-10-08T09:21:05.382Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2177c300cb08f6cadcf6',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Checkliste',
            'id': '5bbb2177c300cb08f6cadced'
          },
          'card': {
            'shortLink': 'HQUEvrju',
            'idShort': 17,
            'name': 'Server side checks',
            'id': '5bbb2173a89b4e672dde24df'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:20:55.304Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2173a89b4e672dde24e0',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'card': {
            'shortLink': 'HQUEvrju',
            'idShort': 17,
            'name': 'Server side checks',
            'id': '5bbb2173a89b4e672dde24df'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:20:51.812Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb211b0c4f8187011d7683',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'card': {
            'shortLink': 'JTAQXVWN',
            'idShort': 16,
            'name': 'Example Screen',
            'id': '5bbb210d7833df6c0c2055af'
          },
          'attachment': {
            'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb210d7833df6c0c2055af/252d66a4880ef387b29072aacf006608/Bildschirmfoto_2018-10-08_um_11.18.57.png',
            'name': 'Bildschirmfoto 2018-10-08 um 11.18.57.png',
            'id': '5bbb211b0c4f8187011d7681',
            'edgeColor': '#fcfcfc',
            'previewUrl': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/600x63/f17a05f870def96237a61bef35a4404a/Bildschirmfoto_2018-10-08_um_11.18.57.png',
            'previewUrl2x': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/1200x125/016da034bde7eefa9f759e8d41be1b71/Bildschirmfoto_2018-10-08_um_11.18.57.png'
          }
        },
        'type': 'addAttachmentToCard',
        "dateLastActivity": '2018-10-08T09:19:23.645Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb211326ff306b5086193e',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'JTAQXVWN',
            'idShort': 16,
            'name': 'Example Screen',
            'id': '5bbb210d7833df6c0c2055af'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:19:15.742Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb210d7833df6c0c2055b0',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'card': {
            'shortLink': 'JTAQXVWN',
            'idShort': 16,
            'name': 'Example Screen',
            'id': '5bbb210d7833df6c0c2055af'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:19:09.583Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20fc0f3e653e73b495e8',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': '9YhghJYu',
            'idShort': 15,
            'name': 'Summary',
            'id': '5bbb20f456c8191925deda42',
            'desc': 'The Log In Form is used by current members to log into their accounts in order to find out the current time. It looks like this:\n\n'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:18:52.118Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20fad8e104785ef7ffec',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': '9YhghJYu',
            'idShort': 15,
            'id': '5bbb20f456c8191925deda42',
            'name': 'Summary'
          },
          'old': {
            'name': 'Summar'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:18:50.521Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20f456c8191925deda43',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          },
          'card': {
            'shortLink': '9YhghJYu',
            'idShort': 15,
            'name': 'Summar',
            'id': '5bbb20f456c8191925deda42'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:18:44.501Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20eba4ab0087836d2196',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Log In Form',
            'id': '5bbb20eba4ab0087836d2195'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T09:18:35.813Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20e0bfd2e1820d470e3e',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'name': 'Example Screen',
            'id': '5bbb1e70e2ac9d3b3c955066'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:18:24.414Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20b1a016492466f965fc',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'id': '5bbb1dc5aab7c9877c7c0317',
            'name': 'Purposes'
          },
          'old': {
            'name': 'Displayed when the Shockwave animation is complete, the Home Page serves three purposes:'
          }
        },
        'type': 'updateChecklist',
        "dateLastActivity": '2018-10-08T09:17:37.094Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb208731c3bb18a75c53d4',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'id': '5bbb1e70e2ac9d3b3c955066',
            'name': 'Example Screen'
          },
          'old': {
            'name': 'Summary'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:16:55.099Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb207f3dcc526d091fcae4',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'id': '5bbb1e70e2ac9d3b3c955066',
            'name': 'Summary'
          },
          'old': {
            'name': 'Example Screen'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:16:47.819Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2077053b0a3d90734891',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'id': '5bbb19324aaf11148f432315',
            'name': 'Summary'
          },
          'old': {
            'name': 'Purposes'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:16:39.196Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb204e4e774f7ba9314467',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'I8mUKmvL',
            'idShort': 14,
            'name': 'UI Description',
            'id': '5bbb200ea7dcb95436e66121'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:15:58.401Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2032b1b5af3e59b3ce42',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'I8mUKmvL',
            'idShort': 14,
            'name': 'UI Description',
            'id': '5bbb200ea7dcb95436e66121',
            'pos': 294911
          },
          'old': {
            'pos': 393215
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:15:30.714Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb202ef752d04d4da03659',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'I8mUKmvL',
            'idShort': 14,
            'id': '5bbb200ea7dcb95436e66121',
            'name': 'UI Description'
          },
          'old': {
            'name': 'User Interactions'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:15:26.017Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb2015b5055e4c64b54f3b',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Features',
            'id': '5bbb2015b5055e4c64b54f3a'
          },
          'card': {
            'shortLink': 'I8mUKmvL',
            'idShort': 14,
            'name': 'User Interactions',
            'id': '5bbb200ea7dcb95436e66121'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:15:01.721Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb200ea7dcb95436e66122',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'card': {
            'shortLink': 'I8mUKmvL',
            'idShort': 14,
            'name': 'User Interactions',
            'id': '5bbb200ea7dcb95436e66121'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:14:54.048Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb20027095d514587e55e6',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'name': 'Example Screen',
            'id': '5bbb1e70e2ac9d3b3c955066',
            'desc': ''
          },
          'old': {
            'desc': 'On this, and on all screens, clicking on the WhatTimeIsIt.com logo in the top left corner goes back to Home Page.'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:14:42.192Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1fca73402a868ee28d85',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'kvKrxcIL',
            'idShort': 13,
            'name': 'Use includes for string tempaltes',
            'id': '5bbb1fc1f0aaf15d244833f9'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:13:46.388Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1fc1f0aaf15d244833fa',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'card': {
            'shortLink': 'kvKrxcIL',
            'idShort': 13,
            'name': 'Use includes for string tempaltes',
            'id': '5bbb1fc1f0aaf15d244833f9'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:13:37.307Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1f839d6be24f1d3df723',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'name': 'Example Screen',
            'id': '5bbb1e70e2ac9d3b3c955066',
            'desc': 'On this, and on all screens, clicking on the WhatTimeIsIt.com logo in the top left corner goes back to Home Page.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:12:35.337Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1f626e20c85242474642',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'name': 'Example Screen',
            'id': '5bbb1e70e2ac9d3b3c955066'
          },
          'attachment': {
            'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb1e70e2ac9d3b3c955066/6cfd14e729ece134d32425ad774086d0/Bildschirmfoto_2018-10-08_um_11.11.45.png',
            'name': 'Bildschirmfoto 2018-10-08 um 11.11.45.png',
            'id': '5bbb1f626e20c8524247463f',
            'edgeColor': '#fcfcfc',
            'previewUrl': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/600x61/5b9a0d1ce95f20e4c1dae9c52cb3f628/Bildschirmfoto_2018-10-08_um_11.11.45.png',
            'previewUrl2x': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/1200x121/f1c0363f2857ecc1341f3676ede6268c/Bildschirmfoto_2018-10-08_um_11.11.45.png'
          }
        },
        'type': 'addAttachmentToCard',
        "dateLastActivity": '2018-10-08T09:12:02.384Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1f42ec155c21544e8857',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'name': 'Purposes',
            'id': '5bbb19324aaf11148f432315'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:11:30.898Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e743acdf41456c0822e',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'name': 'Purposes',
            'id': '5bbb19324aaf11148f432315'
          },
          'deactivated': false,
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'removeMemberFromCard',
        "dateLastActivity": '2018-10-08T09:08:04.193Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e70e2ac9d3b3c955067',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'card': {
            'shortLink': 'UnqldvXg',
            'idShort': 12,
            'name': 'Example Screen',
            'id': '5bbb1e70e2ac9d3b3c955066'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:08:00.035Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e4614c4132289d7a528',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'id': '5bbb19324aaf11148f432315',
            'name': 'Purposes'
          },
          'old': {
            'name': 'Home Page'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:07:18.458Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e2df752d04d4d9faeda',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'listAfter': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'listBefore': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'name': 'Home Page',
            'id': '5bbb19324aaf11148f432315',
            'idList': '5bbb1e0edfa5ae1b5b2e71e1'
          },
          'old': {
            'idList': '5bbb1915f4a79651185fd488'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:06:53.997Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e27a0fef8720b3b6b03',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'yuxqJFVn',
            'idShort': 11,
            'name': 'Skip Splashscreen',
            'id': '5bbb1d854c45286f23978974'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T09:06:47.124Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e0edfa5ae1b5b2e71e2',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Home Page',
            'id': '5bbb1e0edfa5ae1b5b2e71e1'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T09:06:22.235Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e08a351f77bf30e367f',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Splash Screen',
            'id': '5bbb1deba456f64cb4557c8d'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'id': '5bbb192c41cc10874b3e625e',
            'name': 'Summary'
          },
          'old': {
            'name': 'Splash Screen'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:06:16.624Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1e0266c87b3e7d9e2c44',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'checklist': {
            'name': 'Issues',
            'id': '5bbb1d6a347195864d2134e1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e'
          }
        },
        'type': 'removeChecklistFromCard',
        "dateLastActivity": '2018-10-08T09:06:10.825Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1df523b1817f96193fbc',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'listAfter': {
            'name': 'Splash Screen',
            'id': '5bbb1deba456f64cb4557c8d'
          },
          'listBefore': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'yuxqJFVn',
            'idShort': 11,
            'name': 'Skip Splashscreen',
            'id': '5bbb1d854c45286f23978974',
            'idList': '5bbb1deba456f64cb4557c8d'
          },
          'old': {
            'idList': '5bbb1915f4a79651185fd488'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:05:57.424Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1ded07ada24b218bcd96',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'listAfter': {
            'name': 'Splash Screen',
            'id': '5bbb1deba456f64cb4557c8d'
          },
          'listBefore': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e',
            'idList': '5bbb1deba456f64cb4557c8d'
          },
          'old': {
            'idList': '5bbb1915f4a79651185fd488'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:05:49.247Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1deba456f64cb4557c8e',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Splash Screen',
            'id': '5bbb1deba456f64cb4557c8d'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T09:05:47.299Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1dc5aab7c9877c7c0318',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Displayed when the Shockwave animation is complete, the Home Page serves three purposes:',
            'id': '5bbb1dc5aab7c9877c7c0317'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'name': 'Home Page',
            'id': '5bbb19324aaf11148f432315'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:05:09.664Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1d8a06bf6b5165ac1336',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'yuxqJFVn',
            'idShort': 11,
            'name': 'Skip Splashscreen',
            'id': '5bbb1d854c45286f23978974',
            'desc': 'If Marketing allows, we should deposit a cookie on the user’s computer if they click SKIP THIS which will cause the animation to always be skipped in the future. Frequent visitors should not have to see the animation more than once. I talked to Jim in Marketing about this and he’s going to take point in convening a committee of Sales, Marketing, and PR to discuss.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:04:10.845Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1d88d93d3d3207d00227',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'yuxqJFVn',
            'idShort': 11,
            'name': 'Skip Splashscreen',
            'id': '5bbb1d854c45286f23978974',
            'pos': 163839
          },
          'old': {
            'pos': 327679
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:04:08.169Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1d854c45286f23978975',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'card': {
            'shortLink': 'yuxqJFVn',
            'idShort': 11,
            'name': 'Skip Splashscreen',
            'id': '5bbb1d854c45286f23978974'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T09:04:05.771Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1d6a347195864d2134e2',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Issues',
            'id': '5bbb1d6a347195864d2134e1'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:03:38.749Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1d4d35b13d5a99f9ac3c',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'checklist': {
            'name': 'Issues',
            'id': '5bbb1d35b5e64b78f0b2a2c1'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e'
          }
        },
        'type': 'removeChecklistFromCard',
        "dateLastActivity": '2018-10-08T09:03:09.217Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1d35b5e64b78f0b2a2c2',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'Issues',
            'id': '5bbb1d35b5e64b78f0b2a2c1'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T09:02:45.228Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1cb839b4d4848df904b1',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e',
            'desc': 'An annoying, gratuitous Shockwave animation that plays stupid music and drives everyone crazy.  Splash Screen  will be commissioned by a high-paid graphics animation  _boutique_  in a loft in Soho from people who bring their dogs to work, wear found objects safety-pinned to their ears, and go to Starbucks four times  _before lunch_.\n\nAfter the animation has played for about 10 seconds, a link that says “SKIP THIS” will fade into view in the bottom right corner. To avoid people seeing this and clicking on it, SKIP THIS will be so far down and to the right that most people won’t see it. It should be at least 800 pixels from the left border of the animation and 600 pixels from the top.\n\nClicking on SKIP THIS goes to  Home Page. When the animation is complete, it will redirect the browser to  Home Page  automatically.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:00:40.220Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1c95c4353422f8cdf641',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'GszoN5Dk',
            'idShort': 3,
            'name': 'Scenario 2: Cindy',
            'id': '5bbb17ee7749bc51d5269ad1',
            'desc': '\nCindy is a teenager in high school. She goes to a pretty pathetic public high school, and she’s pretty smart, so when she gets home at 2:00 pm, it only takes her about 7 minutes (on average) to do her Algebra homework. None of her other teachers even bother to give her homework. Her baby brother (half brother) is vegged out in front of the only TV set watching Teletubbies, so she spends the afternoon (from 2:07 until about 6:30, when her _new_ mommy serves dinner) surfing the net and chatting with her friends on AOL. She’s always looking for exciting new web sites. As a result of typing “What Time Is It?” randomly into a search engine (by mistake, she meant to ask one of her friends using Instant Messenger) she gets to **WhatTimeIsIt.com**, and sets up a new account. She chooses a user name and “RyanPhillipe” as her password, selects her time zone, and _voila_ — finds out what time it is'
          },
          'old': {
            'desc': 'Cindy is a teenager in high school. She goes to a pretty pathetic public high school, and she’s pretty smart, so when she gets home at 2:00 pm, it only takes her about 7 minutes (on average) to do her Algebra homework. None of her other teachers even bother to give her homework. Her baby brother (half brother) is vegged out in front of the only TV set watching Teletubbies, so she spends the afternoon (from 2:07 until about 6:30, when her new mommy serves dinner) surfing the net and chatting with her friends on AOL. She’s always looking for exciting new web sites. As a result of typing “What Time Is It?” randomly into a search engine (by mistake, she meant to ask one of her friends using Instant Messenger) she gets to WhatTimeIsIt.com, and sets up a new account. She chooses a user name and “RyanPhillipe” as her password, selects her time zone, and voila — finds out what time it is.'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T09:00:05.238Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1c7c73b0c513d36ef0b6',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'idU30SfK',
            'idShort': 2,
            'name': 'Scenario 1: Mike',
            'id': '5bbb17e56100b0155cc4bfa7',
            'desc': 'Mike is a busy executive. He is the president of a large, important company that makes dynamite-based products for children which are sold through national chains such as Toys ‘R’ Us. During the course of a typical day, he has many meetings with many very important people. Sometimes a man comes over from the bank to harass him for not paying the interest that was due three months ago on his line of credit. Sometimes another man comes from another bank trying to get him to sign up for another line of credit. Sometimes his venture capitalists (the nice people who gave Mike the money to start his business) visit him to complain that he is earning too much money. “A bonfire!” they demand. “Wall Street likes to see a bonfire!”\n\nThese visitors are very upset if Mike has previously promised to meet with them at a certain time, but when that time comes around, Mike is nowhere to be found. This happens because Mike doesn’t know what time it is. At his secretary’s recommendation, Mike signs up for a  **WhatTimeIsIt.com**  account. Now, whenever Mike is wondering about the time, he simply logs onto  **WhatTimeIsIt.com**, enters his username and password, and finds out the current time. He visits the site several times during the day: to find out when it’s time for lunch, to check if he’s late for the next meeting, etc. Towards the end of the day, in fact, from about 3:00 p.m. onwards, he checks the site increasingly frequently to see when it’s time to go home. By 4:45 he’s basically just hitting “Refresh” again and again.'
          },
          'old': {
            'desc': 'Mike is a busy executive. He is the president of a large, important company that makes dynamite-based products for children which are sold through national chains such as Toys ‘R’ Us. During the course of a typical day, he has many meetings with many very important people. Sometimes a man comes over from the bank to harass him for not paying the interest that was due three months ago on his line of credit. Sometimes another man comes from another bank trying to get him to sign up for another line of credit. Sometimes his venture capitalists (the nice people who gave Mike the money to start his business) visit him to complain that he is earning too much money. “A bonfire!” they demand. “Wall Street likes to see a bonfire!”\n\nThese visitors are very upset if Mike has previously promised to meet with them at a certain time, but when that time comes around, Mike is nowhere to be found. This happens because Mike doesn’t know what time it is. At his secretary’s recommendation, Mike signs up for a WhatTimeIsIt.com account. Now, whenever Mike is wondering about the time, he simply logs onto WhatTimeIsIt.com, enters his username and password, and finds out the current time. He visits the site several times during the day: to find out when it’s time for lunch, to check if he’s late for the next meeting, etc. Towards the end of the day, in fact, from about 3:00 p.m. onwards, he checks the site increasingly frequently to see when it’s time to go home. By 4:45 he’s basically just hitting “Refresh” again and again.'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:59:40.583Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1c3603239672d1e8b37a',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': '46BaNvEI',
            'idShort': 10,
            'name': 'Log In Form',
            'id': '5bbb19389e9b5078dfabaebc'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:58:30.940Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1c34c901a8818f1eee2b',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'name': 'Home Page',
            'id': '5bbb19324aaf11148f432315'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:58:28.048Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1c2ef653a18e3bbe2b18',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:58:22.271Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1b064f1db631093e9d44',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': '19RwCX4J',
            'idShort': 7,
            'name': 'Summary',
            'id': '5bbb19200df5b4798f41cf1d'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:53:26.133Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1b018ceb9636c6095c51',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'uzhUplDW',
            'idShort': 6,
            'name': 'WhatTimeIsIt.com Flowchart',
            'id': '5bbb18a772a02060103bba5f'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:53:21.612Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb19389e9b5078dfabaebd',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'card': {
            'shortLink': '46BaNvEI',
            'idShort': 10,
            'name': 'Log In Form',
            'id': '5bbb19389e9b5078dfabaebc'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:45:44.582Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb19324aaf11148f432316',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'card': {
            'shortLink': 'H9nejuvz',
            'idShort': 9,
            'name': 'Home Page',
            'id': '5bbb19324aaf11148f432315'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:45:38.802Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb192c41cc10874b3e625f',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'card': {
            'shortLink': 'Bfm7MdG3',
            'idShort': 8,
            'name': 'Splash Screen',
            'id': '5bbb192c41cc10874b3e625e'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:45:32.630Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1924bb8f7e3ea3d27305',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': '19RwCX4J',
            'idShort': 7,
            'name': 'Summary',
            'id': '5bbb19200df5b4798f41cf1d',
            'desc': 'WhatTimeIsIt.com consists of quite a few different screens. Most screens will follow a standard format, with a look and feel to be designed in the future by a graphic designer. This document is more concerned with the functionality and the interaction design, not the exact look and layout.\n\nAll screens are created in HTML. (The single exception is the Splash Screen, which is created using Macromedia Shockwave).\n\nEach screen in WhatTimeIsIt.com is known by a canonical name which will always appear, in this document, with an underline, so you know we’re referring to a screen by name, for example, Home Page.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:45:24.780Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb19200df5b4798f41cf1e',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          },
          'card': {
            'shortLink': '19RwCX4J',
            'idShort': 7,
            'name': 'Summary',
            'id': '5bbb19200df5b4798f41cf1d'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:45:20.446Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1915f4a79651185fd489',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Screen by Screen Specification',
            'id': '5bbb1915f4a79651185fd488'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T08:45:09.401Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1903a3cea851da038522',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Flowcharts',
            'id': '5bbb18a4e1f1791a15e529fe'
          },
          'card': {
            'shortLink': 'uzhUplDW',
            'idShort': 6,
            'name': 'WhatTimeIsIt.com Flowchart',
            'id': '5bbb18a772a02060103bba5f'
          },
          'attachment': {
            'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb18a772a02060103bba5f/872aebd3baaf10b23264c2a214e27964/chart.png',
            'name': 'chart.png',
            'id': '5bbb1903a3cea851da03851d',
            'edgeColor': '#fcfcfc',
            'previewUrl': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb18a772a02060103bba5f/872aebd3baaf10b23264c2a214e27964/chart.png',
            'previewUrl2x': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb18a772a02060103bba5f/872aebd3baaf10b23264c2a214e27964/chart.png'
          }
        },
        'type': 'addAttachmentToCard',
        "dateLastActivity": '2018-10-08T08:44:51.815Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb18a772a02060103bba60',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Flowcharts',
            'id': '5bbb18a4e1f1791a15e529fe'
          },
          'card': {
            'shortLink': 'uzhUplDW',
            'idShort': 6,
            'name': 'WhatTimeIsIt.com Flowchart',
            'id': '5bbb18a772a02060103bba5f'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:43:19.038Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb18a4e1f1791a15e529ff',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Flowcharts',
            'id': '5bbb18a4e1f1791a15e529fe'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T08:43:16.870Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1874de6f5b582a552a1d',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'HVC228wV',
            'idShort': 5,
            'name': 'Non-Goals',
            'id': '5bbb1851be864f0c569f7d7a'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:42:28.971Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1866b1ee961418537d80',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'checklist': {
            'name': 'This version will not support the following features:',
            'id': '5bbb1866b1ee961418537d7f'
          },
          'card': {
            'shortLink': 'HVC228wV',
            'idShort': 5,
            'name': 'Non-Goals',
            'id': '5bbb1851be864f0c569f7d7a'
          }
        },
        'type': 'addChecklistToCard',
        "dateLastActivity": '2018-10-08T08:42:14.096Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1864ac0ebd710d0be07a',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Exclusions',
            'id': '5bbb1831006f624be7c74787'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'HVC228wV',
            'idShort': 5,
            'name': 'Non-Goals',
            'id': '5bbb1851be864f0c569f7d7a',
            'desc': ''
          },
          'old': {
            'desc': 'This version will not support the following features:'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:42:12.080Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1857a4037f3673d89317',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Exclusions',
            'id': '5bbb1831006f624be7c74787'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'HVC228wV',
            'idShort': 5,
            'name': 'Non-Goals',
            'id': '5bbb1851be864f0c569f7d7a',
            'desc': 'This version will not support the following features:'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:41:59.620Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1851be864f0c569f7d7b',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Exclusions',
            'id': '5bbb1831006f624be7c74787'
          },
          'card': {
            'shortLink': 'HVC228wV',
            'idShort': 5,
            'name': 'Non-Goals',
            'id': '5bbb1851be864f0c569f7d7a'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:41:53.386Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb184b0818980fc05b21dc',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'id': '5bbb1831006f624be7c74787',
            'name': 'Exclusions'
          },
          'old': {
            'name': 'Non Goals'
          }
        },
        'type': 'updateList',
        "dateLastActivity": '2018-10-08T08:41:47.354Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1831006f624be7c74788',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Non Goals',
            'id': '5bbb1831006f624be7c74787'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T08:41:21.741Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb182428cb2b7ac79537d2',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'GszoN5Dk',
            'idShort': 3,
            'name': 'Scenario 2: Cindy',
            'id': '5bbb17ee7749bc51d5269ad1',
            'desc': 'Cindy is a teenager in high school. She goes to a pretty pathetic public high school, and she’s pretty smart, so when she gets home at 2:00 pm, it only takes her about 7 minutes (on average) to do her Algebra homework. None of her other teachers even bother to give her homework. Her baby brother (half brother) is vegged out in front of the only TV set watching Teletubbies, so she spends the afternoon (from 2:07 until about 6:30, when her new mommy serves dinner) surfing the net and chatting with her friends on AOL. She’s always looking for exciting new web sites. As a result of typing “What Time Is It?” randomly into a search engine (by mistake, she meant to ask one of her friends using Instant Messenger) she gets to WhatTimeIsIt.com, and sets up a new account. She chooses a user name and “RyanPhillipe” as her password, selects her time zone, and voila — finds out what time it is.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:41:08.908Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb181cfc1881364ebb0de3',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'idU30SfK',
            'idShort': 2,
            'name': 'Scenario 1: Mike',
            'id': '5bbb17e56100b0155cc4bfa7',
            'desc': 'Mike is a busy executive. He is the president of a large, important company that makes dynamite-based products for children which are sold through national chains such as Toys ‘R’ Us. During the course of a typical day, he has many meetings with many very important people. Sometimes a man comes over from the bank to harass him for not paying the interest that was due three months ago on his line of credit. Sometimes another man comes from another bank trying to get him to sign up for another line of credit. Sometimes his venture capitalists (the nice people who gave Mike the money to start his business) visit him to complain that he is earning too much money. “A bonfire!” they demand. “Wall Street likes to see a bonfire!”\n\nThese visitors are very upset if Mike has previously promised to meet with them at a certain time, but when that time comes around, Mike is nowhere to be found. This happens because Mike doesn’t know what time it is. At his secretary’s recommendation, Mike signs up for a WhatTimeIsIt.com account. Now, whenever Mike is wondering about the time, he simply logs onto WhatTimeIsIt.com, enters his username and password, and finds out the current time. He visits the site several times during the day: to find out when it’s time for lunch, to check if he’s late for the next meeting, etc. Towards the end of the day, in fact, from about 3:00 p.m. onwards, he checks the site increasingly frequently to see when it’s time to go home. By 4:45 he’s basically just hitting “Refresh” again and again.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:41:00.336Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb180eda7bef86bf32cdb2',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'GszoN5Dk',
            'idShort': 3,
            'name': 'Scenario 2: Cindy',
            'id': '5bbb17ee7749bc51d5269ad1'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:40:46.660Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb180b87697c7a1c5a3120',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'idU30SfK',
            'idShort': 2,
            'name': 'Scenario 1: Mike',
            'id': '5bbb17e56100b0155cc4bfa7'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:40:43.297Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb180644b31a36781b6091',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'zoXLzUyF',
            'idShort': 4,
            'name': 'Summary',
            'id': '5bbb17f91750323778d1b6c8'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:40:38.159Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb18022c77b73b45ec38cc',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'zoXLzUyF',
            'idShort': 4,
            'name': 'Summary',
            'id': '5bbb17f91750323778d1b6c8',
            'desc': 'In designing products, it helps to imagine a few real life stories of how actual (stereotypical) people would use them. We’ll look at two scenarios.\n\n'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:40:34.029Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17fb96688252f3def8a6',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'zoXLzUyF',
            'idShort': 4,
            'name': 'Summary',
            'id': '5bbb17f91750323778d1b6c8',
            'pos': 32767.5
          },
          'old': {
            'pos': 196607
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:40:27.397Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17f91750323778d1b6c9',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'card': {
            'shortLink': 'zoXLzUyF',
            'idShort': 4,
            'name': 'Summary',
            'id': '5bbb17f91750323778d1b6c8'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:40:25.690Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17ee7749bc51d5269ad2',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'card': {
            'shortLink': 'GszoN5Dk',
            'idShort': 3,
            'name': 'Scenario 2: Cindy',
            'id': '5bbb17ee7749bc51d5269ad1'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:40:14.445Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17e56100b0155cc4bfa8',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          },
          'card': {
            'shortLink': 'idU30SfK',
            'idShort': 2,
            'name': 'Scenario 1: Mike',
            'id': '5bbb17e56100b0155cc4bfa7'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:40:05.960Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17cec4364858c96ff861',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'member': {
            'name': 'jank87',
            'id': '506adbd781d742d93ae0f0dd'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'PPR3SNaY',
            'idShort': 1,
            'name': 'Overview',
            'id': '5bbb17427d8307578d63f864'
          },
          'idMember': '506adbd781d742d93ae0f0dd'
        },
        'type': 'addMemberToCard',
        "dateLastActivity": '2018-10-08T08:39:42.912Z',
        'limits': {},
        'member': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        },
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17b9cb3fdb0de24f9c18',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Preface',
            'id': '5bbb173d50bf9031f879cc09'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'PPR3SNaY',
            'idShort': 1,
            'name': 'Overview',
            'id': '5bbb17427d8307578d63f864',
            'desc': '**WhatTimeIsIt.com** is a service that tells people what time it is, over the web.\n\n**This spec is not, by any stretch of the imagination, complete.** All of the wording will need to be revised several times before it is finalized. The graphics and layout of the screens is shown here merely to illustrate the underlying functionality. The actual look and feel will be developed over time with the input of graphics designers and iterative user feedback.\n\nThis spec does not discuss the algorithms used by the time calculation engine, which will be discussed elsewhere. It simply discusses what the user sees when they interact with WhatTimeIsIt.com.'
          },
          'old': {
            'desc': '*WhatTimeIsIt.com* is a service that tells people what time it is, over the web.\n\n*This spec is not, by any stretch of the imagination, complete.* All of the wording will need to be revised several times before it is finalized. The graphics and layout of the screens is shown here merely to illustrate the underlying functionality. The actual look and feel will be developed over time with the input of graphics designers and iterative user feedback.\n\nThis spec does not discuss the algorithms used by the time calculation engine, which will be discussed elsewhere. It simply discusses what the user sees when they interact with WhatTimeIsIt.com.'
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:39:21.838Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb179f4204376b09e19177',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'list': {
            'name': 'Preface',
            'id': '5bbb173d50bf9031f879cc09'
          },
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'card': {
            'shortLink': 'PPR3SNaY',
            'idShort': 1,
            'name': 'Overview',
            'id': '5bbb17427d8307578d63f864',
            'desc': '*WhatTimeIsIt.com* is a service that tells people what time it is, over the web.\n\n*This spec is not, by any stretch of the imagination, complete.* All of the wording will need to be revised several times before it is finalized. The graphics and layout of the screens is shown here merely to illustrate the underlying functionality. The actual look and feel will be developed over time with the input of graphics designers and iterative user feedback.\n\nThis spec does not discuss the algorithms used by the time calculation engine, which will be discussed elsewhere. It simply discusses what the user sees when they interact with WhatTimeIsIt.com.'
          },
          'old': {
            'desc': ''
          }
        },
        'type': 'updateCard',
        "dateLastActivity": '2018-10-08T08:38:55.388Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb1755ac51d6881b7843e9',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Scenarios',
            'id': '5bbb1755ac51d6881b7843e8'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T08:37:41.410Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb17427d8307578d63f865',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Preface',
            'id': '5bbb173d50bf9031f879cc09'
          },
          'card': {
            'shortLink': 'PPR3SNaY',
            'idShort': 1,
            'name': 'Overview',
            'id': '5bbb17427d8307578d63f864'
          }
        },
        'type': 'createCard',
        "dateLastActivity": '2018-10-08T08:37:22.814Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb173d50bf9031f879cc0a',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          },
          'list': {
            'name': 'Preface',
            'id': '5bbb173d50bf9031f879cc09'
          }
        },
        'type': 'createList',
        "dateLastActivity": '2018-10-08T08:37:17.582Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      },
      {
        'id': '5bbb16f86c5c8152c7bd6652',
        'idMemberCreator': '506adbd781d742d93ae0f0dd',
        'data': {
          'board': {
            'shortLink': 'Yod3k5kQ',
            'name': 'Specs-Template',
            'id': '5bbb16f86c5c8152c7bd6650'
          }
        },
        'type': 'createBoard',
        "dateLastActivity": '2018-10-08T08:36:08.334Z',
        'limits': {},
        'memberCreator': {
          'id': '506adbd781d742d93ae0f0dd',
          'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
          'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
          'fullName': 'jank87',
          'initials': 'J',
          'username': 'jank87'
        }
      }
    ],
    'cards': [
      {
        'id': '5bbb17427d8307578d63f864',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:09.825Z',
        'desc': '**WhatTimeIsIt.com** is a service that tells people what time it is, over the web.\n\n**This spec is not, by any stretch of the imagination, complete.** All of the wording will need to be revised several times before it is finalized. The graphics and layout of the screens is shown here merely to illustrate the underlying functionality. The actual look and feel will be developed over time with the input of graphics designers and iterative user feedback.\n\nThis spec does not discuss the algorithms used by the time calculation engine, which will be discussed elsewhere. It simply discusses what the user sees when they interact with WhatTimeIsIt.com.',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb173d50bf9031f879cc09',
        'idMembersVoted': [],
        'idShort': 1,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Overview',
        'pos': 65535,
        'shortLink': 'PPR3SNaY',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33hhz24nt872qmc10+26ayob8ixa@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/PPR3SNaY',
        'subscribed': true,
        'url': 'https://trello.com/c/PPR3SNaY/1-overview',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb17f91750323778d1b6c8',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:02.923Z',
        'desc': 'In designing products, it helps to imagine a few real life stories of how actual (stereotypical) people would use them. We’ll look at two scenarios.\n\n',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1755ac51d6881b7843e8',
        'idMembersVoted': [],
        'idShort': 4,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Summary',
        'pos': 32767.5,
        'shortLink': 'zoXLzUyF',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33i1pxkscq79kzq2w+2koizt4fx4@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/zoXLzUyF',
        'subscribed': true,
        'url': 'https://trello.com/c/zoXLzUyF/4-summary',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb17e56100b0155cc4bfa7',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:25:57.250Z',
        'desc': 'Mike is a busy executive. He is the president of a large, important company that makes dynamite-based products for children which are sold through national chains such as Toys ‘R’ Us. During the course of a typical day, he has many meetings with many very important people. Sometimes a man comes over from the bank to harass him for not paying the interest that was due three months ago on his line of credit. Sometimes another man comes from another bank trying to get him to sign up for another line of credit. Sometimes his venture capitalists (the nice people who gave Mike the money to start his business) visit him to complain that he is earning too much money. “A bonfire!” they demand. “Wall Street likes to see a bonfire!”\n\nThese visitors are very upset if Mike has previously promised to meet with them at a certain time, but when that time comes around, Mike is nowhere to be found. This happens because Mike doesn’t know what time it is. At his secretary’s recommendation, Mike signs up for a  **WhatTimeIsIt.com**  account. Now, whenever Mike is wondering about the time, he simply logs onto  **WhatTimeIsIt.com**, enters his username and password, and finds out the current time. He visits the site several times during the day: to find out when it’s time for lunch, to check if he’s late for the next meeting, etc. Towards the end of the day, in fact, from about 3:00 p.m. onwards, he checks the site increasingly frequently to see when it’s time to go home. By 4:45 he’s basically just hitting “Refresh” again and again.',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1755ac51d6881b7843e8',
        'idMembersVoted': [],
        'idShort': 2,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cc'
        ],
        'manualCoverAttachment': false,
        'name': 'Scenario 1: Mike',
        'pos': 65535,
        'shortLink': 'idU30SfK',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33hzl6xb0c9dgozvr+200szw2k7l@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cc',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Requires revision',
            'color': 'orange'
          }
        ],
        'shortUrl': 'https://trello.com/c/idU30SfK',
        'subscribed': true,
        'url': 'https://trello.com/c/idU30SfK/2-scenario-1-mike',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb17ee7749bc51d5269ad1',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:28:59.230Z',
        'desc': '\nCindy is a teenager in high school. She goes to a pretty pathetic public high school, and she’s pretty smart, so when she gets home at 2:00 pm, it only takes her about 7 minutes (on average) to do her Algebra homework. None of her other teachers even bother to give her homework. Her baby brother (half brother) is vegged out in front of the only TV set watching Teletubbies, so she spends the afternoon (from 2:07 until about 6:30, when her _new_ mommy serves dinner) surfing the net and chatting with her friends on AOL. She’s always looking for exciting new web sites. As a result of typing “What Time Is It?” randomly into a search engine (by mistake, she meant to ask one of her friends using Instant Messenger) she gets to **WhatTimeIsIt.com**, and sets up a new account. She chooses a user name and “RyanPhillipe” as her password, selects her time zone, and _voila_ — finds out what time it is',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1755ac51d6881b7843e8',
        'idMembersVoted': [],
        'idShort': 3,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Scenario 2: Cindy',
        'pos': 131071,
        'shortLink': 'GszoN5Dk',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33i0kkh0w6xz9tfwx+29uovni0ez@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/GszoN5Dk',
        'subscribed': true,
        'url': 'https://trello.com/c/GszoN5Dk/3-scenario-2-cindy',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb22b495857e292ef58e58',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:28:16.944Z',
        'desc': 'E.T. wants to call home but can only reach home at a certain time. E.T. found out by his new human friend, that **WhatTimeIsIt.com** helps him to determine. By his super alien powers he registered, logged in, set the timezone and auto-retrieved the time every second using his super-mind-external-api-consumer service.\n',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1755ac51d6881b7843e8',
        'idMembersVoted': [],
        'idShort': 20,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0ce'
        ],
        'manualCoverAttachment': false,
        'name': 'Scenario 3: E.T.',
        'pos': 196607,
        'shortLink': 'yoFpuTiZ',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 1,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33qau1xmm87ede0d4+2fk2s7wyv9@boards.trello.com',
        'idChecklists': [],
        'idMembers': [],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0ce',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Should be removed',
            'color': 'red'
          }
        ],
        'shortUrl': 'https://trello.com/c/yoFpuTiZ',
        'subscribed': true,
        'url': 'https://trello.com/c/yoFpuTiZ/20-scenario-3-et',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb1851be864f0c569f7d7a',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:13.645Z',
        'desc': '',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1831006f624be7c74787',
        'idMembersVoted': [],
        'idShort': 5,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Non-Goals',
        'pos': 65535,
        'shortLink': 'HVC228wV',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 3,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33ibb2ako0tdkxe2i+2aqz7gaoc8@boards.trello.com',
        'idChecklists': [
          '5bbb1866b1ee961418537d7f'
        ],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/HVC228wV',
        'subscribed': true,
        'url': 'https://trello.com/c/HVC228wV/5-non-goals',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb18a772a02060103bba5f',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:16.663Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb18a4e1f1791a15e529fe',
        'idMembersVoted': [],
        'idShort': 6,
        'idAttachmentCover': '5bbb1903a3cea851da03851d',
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cf'
        ],
        'manualCoverAttachment': false,
        'name': 'WhatTimeIsIt.com Flowchart',
        'pos': 65535,
        'shortLink': 'uzhUplDW',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 1,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33ikkpm82tmc1axr3+02c3fp9rre@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cf',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'In revision',
            'color': 'yellow'
          }
        ],
        'shortUrl': 'https://trello.com/c/uzhUplDW',
        'subscribed': true,
        'url': 'https://trello.com/c/uzhUplDW/6-whattimeisitcom-flowchart',
        'attachments': [
          {
            'bytes': 9234,
            "dateLastActivity": '2018-10-08T08:44:51.729Z',
            'edgeColor': '#fcfcfc',
            'idMember': '506adbd781d742d93ae0f0dd',
            'isUpload': true,
            'mimeType': null,
            'name': 'chart.png',
            'previews': [
              {
                'bytes': 1992,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb18a772a02060103bba5f/70x50/a46abbbabd0cc1f48ceb956650ba4177/chart.png',
                'height': 50,
                'width': 70,
                '_id': '5bbb1904b7a50b166eb33e7c',
                'scaled': false
              },
              {
                'bytes': 5550,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb18a772a02060103bba5f/250x150/607baf37275dda2fede3274f9461e1c8/chart.png',
                'height': 150,
                'width': 250,
                '_id': '5bbb1904b7a50b166eb33e7b',
                'scaled': false
              },
              {
                'bytes': 6345,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb18a772a02060103bba5f/150x209/a017a065b65401d89977278b337b901e/chart.png',
                'height': 209,
                'width': 150,
                '_id': '5bbb1904b7a50b166eb33e7a',
                'scaled': true
              },
              {
                'bytes': 13565,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb18a772a02060103bba5f/300x418/70ee23c55a9b0e6aad9e23a4e22534d7/chart.png',
                'height': 418,
                'width': 300,
                '_id': '5bbb1904b7a50b166eb33e79',
                'scaled': true
              },
              {
                'bytes': 9234,
                'height': 596,
                'width': 428,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb18a772a02060103bba5f/872aebd3baaf10b23264c2a214e27964/chart.png',
                '_id': '5bbb1904b7a50b166eb33e78',
                'scaled': true
              }
            ],
            'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb18a772a02060103bba5f/872aebd3baaf10b23264c2a214e27964/chart.png',
            'pos': 16384,
            'id': '5bbb1903a3cea851da03851d'
          }
        ],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb19200df5b4798f41cf1d',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:26.258Z',
        'desc': 'WhatTimeIsIt.com consists of quite a few different screens. Most screens will follow a standard format, with a look and feel to be designed in the future by a graphic designer. This document is more concerned with the functionality and the interaction design, not the exact look and layout.\n\nAll screens are created in HTML. (The single exception is the Splash Screen, which is created using Macromedia Shockwave).\n\nEach screen in WhatTimeIsIt.com is known by a canonical name which will always appear, in this document, with an underline, so you know we’re referring to a screen by name, for example, Home Page.',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1915f4a79651185fd488',
        'idMembersVoted': [],
        'idShort': 7,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cc'
        ],
        'manualCoverAttachment': false,
        'name': 'Summary',
        'pos': 65535,
        'shortLink': '19RwCX4J',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33ixm8mef4r3go2l9+05w2rf1ax4@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cc',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Requires revision',
            'color': 'orange'
          }
        ],
        'shortUrl': 'https://trello.com/c/19RwCX4J',
        'subscribed': true,
        'url': 'https://trello.com/c/19RwCX4J/7-summary',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb19389e9b5078dfabaebc',
        'checkItemStates': null,
        'closed': true,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:37.933Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1915f4a79651185fd488',
        'idMembersVoted': [],
        'idShort': 10,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cc'
        ],
        'manualCoverAttachment': false,
        'name': 'Log In Form',
        'pos': 262143,
        'shortLink': '46BaNvEI',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33j09vej8inf4vruk+282rle5k26@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cc',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Requires revision',
            'color': 'orange'
          }
        ],
        'shortUrl': 'https://trello.com/c/46BaNvEI',
        'subscribed': true,
        'url': 'https://trello.com/c/46BaNvEI/10-log-in-form',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb192c41cc10874b3e625e',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:34.987Z',
        'desc': 'An annoying, gratuitous Shockwave animation that plays stupid music and drives everyone crazy.  Splash Screen  will be commissioned by a high-paid graphics animation  _boutique_  in a loft in Soho from people who bring their dogs to work, wear found objects safety-pinned to their ears, and go to Starbucks four times  _before lunch_.\n\nAfter the animation has played for about 10 seconds, a link that says “SKIP THIS” will fade into view in the bottom right corner. To avoid people seeing this and clicking on it, SKIP THIS will be so far down and to the right that most people won’t see it. It should be at least 800 pixels from the left border of the animation and 600 pixels from the top.\n\nClicking on SKIP THIS goes to  Home Page. When the animation is complete, it will redirect the browser to  Home Page  automatically.',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1deba456f64cb4557c8d',
        'idMembersVoted': [],
        'idShort': 8,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Summary',
        'pos': 131071,
        'shortLink': 'Bfm7MdG3',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33iyxqsprnyu1klem+0ke9wto471@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/Bfm7MdG3',
        'subscribed': true,
        'url': 'https://trello.com/c/Bfm7MdG3/8-summary',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb1d854c45286f23978974',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:10:06.921Z',
        'desc': 'If Marketing allows, we should deposit a cookie on the user’s computer if they click SKIP THIS which will cause the animation to always be skipped in the future. Frequent visitors should not have to see the animation more than once. I talked to Jim in Marketing about this and he’s going to take point in convening a committee of Sales, Marketing, and PR to discuss.',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1deba456f64cb4557c8d',
        'idMembersVoted': [],
        'idShort': 11,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0da'
        ],
        'manualCoverAttachment': false,
        'name': 'Skip Splashscreen',
        'pos': 163839,
        'shortLink': 'yuxqJFVn',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33mbav5uac4mur59w+2gxcvuvp4u@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0da',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Is issue',
            'color': 'blue'
          }
        ],
        'shortUrl': 'https://trello.com/c/yuxqJFVn',
        'subscribed': true,
        'url': 'https://trello.com/c/yuxqJFVn/11-skip-splashscreen',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb19324aaf11148f432315',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:29:57.744Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1e0edfa5ae1b5b2e71e1',
        'idMembersVoted': [],
        'idShort': 9,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Summary',
        'pos': 196607,
        'shortLink': 'H9nejuvz',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 3,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33izl8k755v8egvth+1cb3r11cdi@boards.trello.com',
        'idChecklists': [
          '5bbb1dc5aab7c9877c7c0317'
        ],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/H9nejuvz',
        'subscribed': true,
        'url': 'https://trello.com/c/H9nejuvz/9-summary',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb1e70e2ac9d3b3c955066',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:30:01.304Z',
        'desc': '',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1e0edfa5ae1b5b2e71e1',
        'idMembersVoted': [],
        'idShort': 12,
        'idAttachmentCover': '5bbb1f626e20c8524247463f',
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cf'
        ],
        'manualCoverAttachment': false,
        'name': 'Example Screen',
        'pos': 262143,
        'shortLink': 'UnqldvXg',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 1,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33n0s0onxck3d4606+0q608uw3ee@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cf',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'In revision',
            'color': 'yellow'
          }
        ],
        'shortUrl': 'https://trello.com/c/UnqldvXg',
        'subscribed': true,
        'url': 'https://trello.com/c/UnqldvXg/12-example-screen',
        'attachments': [
          {
            'bytes': 89325,
            "dateLastActivity": '2018-10-08T09:12:02.283Z',
            'edgeColor': '#fcfcfc',
            'idMember': '506adbd781d742d93ae0f0dd',
            'isUpload': true,
            'mimeType': null,
            'name': 'Bildschirmfoto 2018-10-08 um 11.11.45.png',
            'previews': [
              {
                'bytes': 694,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/70x50/c87b305411ae4d528a6fa54060369183/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                'height': 50,
                'width': 70,
                '_id': '5bbb1f6202fcb6257a5fd9a8',
                'scaled': false
              },
              {
                'bytes': 5409,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/250x150/b246deccb2c80494609803aea520c418/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                'height': 150,
                'width': 250,
                '_id': '5bbb1f6202fcb6257a5fd9a7',
                'scaled': false
              },
              {
                'bytes': 2047,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/150x15/b27df6c84094c744d39c319dd489f452/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                'height': 15,
                'width': 150,
                '_id': '5bbb1f6202fcb6257a5fd9a6',
                'scaled': true
              },
              {
                'bytes': 6749,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/300x30/12e942a4d35c8c3b307650ba50a87095/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                'height': 30,
                'width': 300,
                '_id': '5bbb1f6202fcb6257a5fd9a5',
                'scaled': true
              },
              {
                'bytes': 22802,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/600x61/5b9a0d1ce95f20e4c1dae9c52cb3f628/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                'height': 61,
                'width': 600,
                '_id': '5bbb1f6202fcb6257a5fd9a4',
                'scaled': true
              },
              {
                'bytes': 70285,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb1e70e2ac9d3b3c955066/1200x121/f1c0363f2857ecc1341f3676ede6268c/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                'height': 121,
                'width': 1200,
                '_id': '5bbb1f6202fcb6257a5fd9a3',
                'scaled': true
              },
              {
                'bytes': 89325,
                'height': 204,
                'width': 2023,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb1e70e2ac9d3b3c955066/6cfd14e729ece134d32425ad774086d0/Bildschirmfoto_2018-10-08_um_11.11.45.png',
                '_id': '5bbb1f6202fcb6257a5fd9a2',
                'scaled': true
              }
            ],
            'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb1e70e2ac9d3b3c955066/6cfd14e729ece134d32425ad774086d0/Bildschirmfoto_2018-10-08_um_11.11.45.png',
            'pos': 16384,
            'id': '5bbb1f626e20c8524247463f'
          }
        ],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb200ea7dcb95436e66121',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:30:04.405Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1e0edfa5ae1b5b2e71e1',
        'idMembersVoted': [],
        'idShort': 14,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cf'
        ],
        'manualCoverAttachment': false,
        'name': 'UI Description',
        'pos': 294911,
        'shortLink': 'I8mUKmvL',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 5,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33o9iugw4u9aasysh+0cez4ivwat@boards.trello.com',
        'idChecklists': [
          '5bbb2015b5055e4c64b54f3a'
        ],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cf',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'In revision',
            'color': 'yellow'
          }
        ],
        'shortUrl': 'https://trello.com/c/I8mUKmvL',
        'subscribed': true,
        'url': 'https://trello.com/c/I8mUKmvL/14-ui-description',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb1fc1f0aaf15d244833f9',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:13:49.109Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb1e0edfa5ae1b5b2e71e1',
        'idMembersVoted': [],
        'idShort': 13,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0d4'
        ],
        'manualCoverAttachment': false,
        'name': 'Use includes for string tempaltes',
        'pos': 327679,
        'shortLink': 'kvKrxcIL',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33o186ss1ibusscu1+2r2a52r5e2@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0d4',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Is technical note',
            'color': 'black'
          }
        ],
        'shortUrl': 'https://trello.com/c/kvKrxcIL',
        'subscribed': true,
        'url': 'https://trello.com/c/kvKrxcIL/13-use-includes-for-string-tempaltes',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb20f456c8191925deda42',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:30:09.072Z',
        'desc': 'The Log In Form is used by current members to log into their accounts in order to find out the current time. It looks like this:\n\n',
        'descData': {
          'emoji': {}
        },
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb20eba4ab0087836d2195',
        'idMembersVoted': [],
        'idShort': 15,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cd'
        ],
        'manualCoverAttachment': false,
        'name': 'Summary',
        'pos': 65535,
        'shortLink': '9YhghJYu',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': false,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': true,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33oyd0ijekfikumo2+13rj6imkft@boards.trello.com',
        'idChecklists': [],
        'idMembers': [],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cd',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Complete',
            'color': 'green'
          }
        ],
        'shortUrl': 'https://trello.com/c/9YhghJYu',
        'subscribed': false,
        'url': 'https://trello.com/c/9YhghJYu/15-summary',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb210d7833df6c0c2055af',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:30:20.607Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb20eba4ab0087836d2195',
        'idMembersVoted': [],
        'idShort': 16,
        'idAttachmentCover': '5bbb211b0c4f8187011d7681',
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cf'
        ],
        'manualCoverAttachment': false,
        'name': 'UI Description',
        'pos': 131071,
        'shortLink': 'JTAQXVWN',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 2,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 1,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33p12ujykw1zt29in+16n3cfnyy0@boards.trello.com',
        'idChecklists': [
          '5bbb21f0a107dd5527fe4a50'
        ],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cf',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'In revision',
            'color': 'yellow'
          }
        ],
        'shortUrl': 'https://trello.com/c/JTAQXVWN',
        'subscribed': true,
        'url': 'https://trello.com/c/JTAQXVWN/16-ui-description',
        'attachments': [
          {
            'bytes': 58771,
            "dateLastActivity": '2018-10-08T09:19:23.567Z',
            'edgeColor': '#fcfcfc',
            'idMember': '506adbd781d742d93ae0f0dd',
            'isUpload': true,
            'mimeType': null,
            'name': 'Bildschirmfoto 2018-10-08 um 11.18.57.png',
            'previews': [
              {
                'bytes': 539,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/70x50/a912a74b5c58c85d9a087002af175530/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                'height': 50,
                'width': 70,
                '_id': '5bbb211cab22ae41b2dc9680',
                'scaled': false
              },
              {
                'bytes': 3183,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/250x150/69f96c2a6a15404703c1cba046222722/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                'height': 150,
                'width': 250,
                '_id': '5bbb211cab22ae41b2dc967f',
                'scaled': false
              },
              {
                'bytes': 1378,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/150x16/2ce7c466878bcc941384d1480ebd45aa/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                'height': 16,
                'width': 150,
                '_id': '5bbb211cab22ae41b2dc967e',
                'scaled': true
              },
              {
                'bytes': 3926,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/300x31/74f0f2432afbb182c643ee12eee305fc/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                'height': 31,
                'width': 300,
                '_id': '5bbb211cab22ae41b2dc967d',
                'scaled': true
              },
              {
                'bytes': 11941,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/600x63/f17a05f870def96237a61bef35a4404a/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                'height': 63,
                'width': 600,
                '_id': '5bbb211cab22ae41b2dc967c',
                'scaled': true
              },
              {
                'bytes': 35500,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb210d7833df6c0c2055af/1200x125/016da034bde7eefa9f759e8d41be1b71/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                'height': 125,
                'width': 1200,
                '_id': '5bbb211cab22ae41b2dc967b',
                'scaled': true
              },
              {
                'bytes': 58771,
                'height': 212,
                'width': 2033,
                'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb210d7833df6c0c2055af/252d66a4880ef387b29072aacf006608/Bildschirmfoto_2018-10-08_um_11.18.57.png',
                '_id': '5bbb211cab22ae41b2dc967a',
                'scaled': true
              }
            ],
            'url': 'https://trello-attachments.s3.amazonaws.com/5bbb16f86c5c8152c7bd6650/5bbb210d7833df6c0c2055af/252d66a4880ef387b29072aacf006608/Bildschirmfoto_2018-10-08_um_11.18.57.png',
            'pos': 16384,
            'id': '5bbb211b0c4f8187011d7681'
          }
        ],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb21c9a456f64cb4567727',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:24:29.864Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb20eba4ab0087836d2195',
        'idMembersVoted': [],
        'idShort': 19,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0d4'
        ],
        'manualCoverAttachment': false,
        'name': 'Use input field type password',
        'pos': 163839,
        'shortLink': 'V4pVqC8l',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 0,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33plfev3k06nu944n+20bdln3n24@boards.trello.com',
        'idChecklists': [],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0d4',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Is technical note',
            'color': 'black'
          }
        ],
        'shortUrl': 'https://trello.com/c/V4pVqC8l',
        'subscribed': true,
        'url': 'https://trello.com/c/V4pVqC8l/19-use-input-field-type-password',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb2173a89b4e672dde24df',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:31:27.634Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb20eba4ab0087836d2195',
        'idMembersVoted': [],
        'idShort': 17,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0cc'
        ],
        'manualCoverAttachment': false,
        'name': 'Server side checks',
        'pos': 196607,
        'shortLink': 'HQUEvrju',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 5,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33pc4obojmcd0q2u7+0akmim6ptg@boards.trello.com',
        'idChecklists': [
          '5bbb2177c300cb08f6cadced'
        ],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0cc',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Requires revision',
            'color': 'orange'
          }
        ],
        'shortUrl': 'https://trello.com/c/HQUEvrju',
        'subscribed': true,
        'url': 'https://trello.com/c/HQUEvrju/17-server-side-checks',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      },
      {
        'id': '5bbb219381e13b12142af24e',
        'checkItemStates': null,
        'closed': false,
        'creationMethod': null,
        'dateLastActivity': '2018-10-08T09:24:36.966Z',
        'desc': '',
        'descData': null,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idList': '5bbb20eba4ab0087836d2195',
        'idMembersVoted': [],
        'idShort': 18,
        'idAttachmentCover': null,
        'limits': {
          'attachments': {
            'perCard': {
              'status': 'ok',
              'disableAt': 950,
              'warnAt': 900
            }
          },
          'checklists': {
            'perCard': {
              'status': 'ok',
              'disableAt': 475,
              'warnAt': 450
            }
          },
          'stickers': {
            'perCard': {
              'status': 'ok',
              'disableAt': 67,
              'warnAt': 63
            }
          }
        },
        'idLabels': [
          '5bbb16f89c16fb124a76a0da'
        ],
        'manualCoverAttachment': false,
        'name': 'Open issues',
        'pos': 262143,
        'shortLink': 'u8bbcigV',
        'badges': {
          'votes': 0,
          'attachmentsByType': {
            'trello': {
              'board': 0,
              'card': 0
            }
          },
          'viewingMemberVoted': false,
          'subscribed': true,
          'fogbugz': '',
          'checkItems': 2,
          'checkItemsChecked': 0,
          'comments': 0,
          'attachments': 0,
          'description': false,
          'due': null,
          'dueComplete': false
        },
        'dueComplete': false,
        'due': null,
        'email': 'jank87+2ev5nug6y5qg2r2k15p+2r33pfknwwg4dfg69n2+0ycsw6kjm6@boards.trello.com',
        'idChecklists': [
          '5bbb219aeac8605d2baefd9b'
        ],
        'idMembers': [
          '506adbd781d742d93ae0f0dd'
        ],
        'labels': [
          {
            'id': '5bbb16f89c16fb124a76a0da',
            'idBoard': '5bbb16f86c5c8152c7bd6650',
            'name': 'Is issue',
            'color': 'blue'
          }
        ],
        'shortUrl': 'https://trello.com/c/u8bbcigV',
        'subscribed': true,
        'url': 'https://trello.com/c/u8bbcigV/18-open-issues',
        'attachments': [],
        'pluginData': [],
        'customFieldItems': []
      }
    ],
    'labels': [
      {
        'id': '5bbb16f89c16fb124a76a0cd',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Complete',
        'color': 'green'
      },
      {
        'id': '5bbb16f89c16fb124a76a0cc',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Requires revision',
        'color': 'orange'
      },
      {
        'id': '5bbb16f89c16fb124a76a0cf',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'In revision',
        'color': 'yellow'
      },
      {
        'id': '5bbb16f89c16fb124a76a0d4',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Is technical note',
        'color': 'black'
      },
      {
        'id': '5bbb16f89c16fb124a76a0da',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Is issue',
        'color': 'blue'
      },
      {
        'id': '5bbb16f89c16fb124a76a0ce',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Should be removed',
        'color': 'red'
      },
      {
        'id': '5bbb1f24e3970053af242175',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Is removed',
        'color': 'purple'
      },
      {
        'id': '5bbb234df5aa2d5829429af1',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'name': 'Deprecated',
        'color': null
      }
    ],
    'lists': [
      {
        'id': '5bbb173d50bf9031f879cc09',
        'name': 'Preface',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 65535,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb1755ac51d6881b7843e8',
        'name': 'Scenarios',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 131071,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb1831006f624be7c74787',
        'name': 'Exclusions',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 196607,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb18a4e1f1791a15e529fe',
        'name': 'Flowcharts',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 262143,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb1915f4a79651185fd488',
        'name': 'Screen by Screen Specification',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 327679,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb1deba456f64cb4557c8d',
        'name': 'Splash Screen',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 393215,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb1e0edfa5ae1b5b2e71e1',
        'name': 'Home Page',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 458751,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      },
      {
        'id': '5bbb20eba4ab0087836d2195',
        'name': 'Log In Form',
        'closed': false,
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'pos': 524287,
        'subscribed': false,
        'limits': {
          'cards': {
            'openPerList': {
              'status': 'ok',
              'disableAt': 4750,
              'warnAt': 4500
            },
            'totalPerList': {
              'status': 'ok',
              'disableAt': 950000,
              'warnAt': 900000
            }
          }
        }
      }
    ],
    'members': [
      {
        'id': '506adbd781d742d93ae0f0dd',
        'avatarHash': '0aae34e7f4ed5f4ee95cb4007ab26f82',
        'avatarUrl': 'https://trello-avatars.s3.amazonaws.com/0aae34e7f4ed5f4ee95cb4007ab26f82',
        'bio': '',
        'bioData': null,
        'confirmed': true,
        'fullName': 'jank87',
        'idEnterprisesDeactivated': [],
        'idPremOrgsAdmin': [],
        'initials': 'J',
        'memberType': 'normal',
        'products': [],
        'status': 'disconnected',
        'url': 'https://trello.com/jank87',
        'username': 'jank87'
      }
    ],
    'checklists': [
      {
        'id': '5bbb1866b1ee961418537d7f',
        'name': 'This version will not support the following features:',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idCard': '5bbb1851be864f0c569f7d7a',
        'pos': 16384,
        'limits': {
          'checkItems': {
            'perChecklist': {
              'status': 'ok',
              'disableAt': 190,
              'warnAt': 180
            }
          }
        },
        'checkItems': [
          {
            'idChecklist': '5bbb1866b1ee961418537d7f',
            'state': 'incomplete',
            'id': '5bbb186c7dff5a8f5bbc2f09',
            'name': 'multiple time zones for one member. All members are assumed to be in the same time zone.',
            'nameData': null,
            'pos': 16559
          },
          {
            'idChecklist': '5bbb1866b1ee961418537d7f',
            'state': 'incomplete',
            'id': '5bbb186dc468cf8634b67f30',
            'name': 'changing passwords.',
            'nameData': null,
            'pos': 33884
          },
          {
            'idChecklist': '5bbb1866b1ee961418537d7f',
            'state': 'incomplete',
            'id': '5bbb186df653a18e3bbd1668',
            'name': 'appointments.',
            'nameData': null,
            'pos': 50991
          }
        ]
      },
      {
        'id': '5bbb1dc5aab7c9877c7c0317',
        'name': 'Purposes',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idCard': '5bbb19324aaf11148f432315',
        'pos': 16384,
        'limits': {
          'checkItems': {
            'perChecklist': {
              'status': 'ok',
              'disableAt': 190,
              'warnAt': 180
            }
          }
        },
        'checkItems': [
          {
            'idChecklist': '5bbb1dc5aab7c9877c7c0317',
            'state': 'incomplete',
            'id': '5bbb1dd19bfec0742f984dad',
            'name': 'Allow people to learn about the service and consider whether they want to sign up',
            'nameData': null,
            'pos': 17386
          },
          {
            'idChecklist': '5bbb1dc5aab7c9877c7c0317',
            'state': 'incomplete',
            'id': '5bbb1dd1d7f75c37c00e07d4',
            'name': 'Allow members who have already signed up to log on',
            'nameData': null,
            'pos': 34306
          },
          {
            'idChecklist': '5bbb1dc5aab7c9877c7c0317',
            'state': 'incomplete',
            'id': '5bbb1dd1780a962c1f88459a',
            'name': 'Allow people who want to sign up to create an account.',
            'nameData': null,
            'pos': 51668
          }
        ]
      },
      {
        'id': '5bbb2015b5055e4c64b54f3a',
        'name': 'Features',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idCard': '5bbb200ea7dcb95436e66121',
        'pos': 16384,
        'limits': {
          'checkItems': {
            'perChecklist': {
              'status': 'ok',
              'disableAt': 190,
              'warnAt': 180
            }
          }
        },
        'checkItems': [
          {
            'idChecklist': '5bbb2015b5055e4c64b54f3a',
            'state': 'incomplete',
            'id': '5bbb20170a83ff8ca46a8354',
            'name': 'On this, and on all screens, clicking on the WhatTimeIsIt.com logo in the top left corner goes back to Home Page.',
            'nameData': null,
            'pos': 17174
          },
          {
            'idChecklist': '5bbb2015b5055e4c64b54f3a',
            'state': 'incomplete',
            'id': '5bbb2017c2c2e8303876e565',
            'name': 'Clicking on the link that says “click here to log on” goes to Log In Form. ',
            'nameData': {
              'emoji': {}
            },
            'pos': 34136
          },
          {
            'idChecklist': '5bbb2015b5055e4c64b54f3a',
            'state': 'incomplete',
            'id': '5bbb2020e8efe02ec28d618c',
            'name': 'Clicking on the link that says “click here to sign up” goes to Sign Up Form.',
            'nameData': null,
            'pos': 51214
          },
          {
            'idChecklist': '5bbb2015b5055e4c64b54f3a',
            'state': 'incomplete',
            'id': '5bbb20260cc3aa684fca31fa',
            'name': 'The other five links display pages with static text to be provided by management, which are beyond the scope of this specification. They will not have to change very often.',
            'nameData': null,
            'pos': 68499
          },
          {
            'idChecklist': '5bbb2015b5055e4c64b54f3a',
            'state': 'incomplete',
            'id': '5bbb20bf19887d8fde6b6ca6',
            'name': 'This screen is displayed when the animation is complete',
            'nameData': null,
            'pos': 8587
          }
        ]
      },
      {
        'id': '5bbb2177c300cb08f6cadced',
        'name': 'When the user clicks Log In, the following checks are performed on the server:',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idCard': '5bbb2173a89b4e672dde24df',
        'pos': 16384,
        'limits': {
          'checkItems': {
            'perChecklist': {
              'status': 'ok',
              'disableAt': 190,
              'warnAt': 180
            }
          }
        },
        'checkItems': [
          {
            'idChecklist': '5bbb2177c300cb08f6cadced',
            'state': 'incomplete',
            'id': '5bbb2178d237684d962f3840',
            'name': 'If the email address was provided, but it could not be a real email address because it is not formatted correctly (e.g. there is no @ sign or it contains characters that are not permitted in email addresses by RFC-822), the server returns another page that looks just like Log In Form, only this time, a red error message is inserted above the address box, saying “The email address you provided is not valid. Please double check it.” Although this text is in red, the text “Please enter your email address” still appears in black. The incorrect email address that the user originally typed will now be pre-populated in the edit box.',
            'nameData': null,
            'pos': 17147
          },
          {
            'idChecklist': '5bbb2177c300cb08f6cadced',
            'state': 'incomplete',
            'id': '5bbb2178e2e30156b68490f1',
            'name': 'If the email address was provided, but it does not correspond to a registered member, the server returns another page that looks just like Log In Form, only this time, a red error message is inserted above the address box, saying “The email address you provided is not a member. Please double check it. To become a member, click on the link on the right side of the screen.” Although this text is in red, the text “Please enter your email address” still appears in black. The incorrect email address that the user originally typed will now be pre-populated in the edit box. [ Question to developers. Can we use JavaScript in this case so that if the user then clicks on the link to become a member, we automatically pre-populate the email address on the sign up form? ]',
            'nameData': null,
            'pos': 34541
          },
          {
            'idChecklist': '5bbb2177c300cb08f6cadced',
            'state': 'incomplete',
            'id': '5bbb217916f0ff20153fad12',
            'name': 'If the email address was provided, and it does correspond to a registered member, but no password was typed at all, we send an email to that address containing the password. The subject of the email is “Your WhatTimeIsIt.com membership”. The email is in plain text. The exact wording of this email is still being debated hotly by the board of directors and will be provided sometime before shipping. [ Developers: for now I suggest using a nasty word. That will light a fire under Chucks’ seat. ]',
            'nameData': null,
            'pos': 51226
          },
          {
            'idChecklist': '5bbb2177c300cb08f6cadced',
            'state': 'incomplete',
            'id': '5bbb2179a6b01668487540f2',
            'name': 'If the email address was provided, and it does correspond to a registered member, and a password was provided, but the password is incorrect, the server returns another page that looks just like Log In Form, only this time, a red error message is inserted above the password box, saying “The password you provided is not valid. Please double check it. Remember, passwords are case-sensitive.” If the password typed does not contain any lower case alphabetic characters, we add this text to the message: “Perhaps you’ve accidentally turned on CAPS LOCK?” Whenever the password is incorrect, the Log In Form comes back with the password box clear.',
            'nameData': null,
            'pos': 68064
          },
          {
            'idChecklist': '5bbb2177c300cb08f6cadced',
            'state': 'incomplete',
            'id': '5bbb2179a750da29bae4cbde',
            'name': 'If the email address and password are OK, jump straight to Display Time.',
            'nameData': null,
            'pos': 85338
          }
        ]
      },
      {
        'id': '5bbb219aeac8605d2baefd9b',
        'name': 'Open',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idCard': '5bbb219381e13b12142af24e',
        'pos': 16384,
        'limits': {
          'checkItems': {
            'perChecklist': {
              'status': 'ok',
              'disableAt': 190,
              'warnAt': 180
            }
          }
        },
        'checkItems': [
          {
            'idChecklist': '5bbb219aeac8605d2baefd9b',
            'state': 'incomplete',
            'id': '5bbb21a39e9c3a2070191fba',
            'name': 'Need to decide about JavaScript in case #2',
            'nameData': null,
            'pos': 16419
          },
          {
            'idChecklist': '5bbb219aeac8605d2baefd9b',
            'state': 'incomplete',
            'id': '5bbb21a914c4132289d87eb3',
            'name': 'Need wording for password email from CEO',
            'nameData': null,
            'pos': 33784
          }
        ]
      },
      {
        'id': '5bbb21f0a107dd5527fe4a50',
        'name': 'Descriptions',
        'idBoard': '5bbb16f86c5c8152c7bd6650',
        'idCard': '5bbb210d7833df6c0c2055af',
        'pos': 16384,
        'limits': {
          'checkItems': {
            'perChecklist': {
              'status': 'ok',
              'disableAt': 190,
              'warnAt': 180
            }
          }
        },
        'checkItems': [
          {
            'idChecklist': '5bbb21f0a107dd5527fe4a50',
            'state': 'incomplete',
            'id': '5bbb21f274c4884abc6b0c06',
            'name': 'The right side of the screen behaves the same way as described previously under Home Page.',
            'nameData': null,
            'pos': 17153
          },
          {
            'idChecklist': '5bbb21f0a107dd5527fe4a50',
            'state': 'incomplete',
            'id': '5bbb21f241cd1f05185493df',
            'name': 'The email box allows for up to 60 characters to be typed. The password box allows for up to 12 characters to be typed. To disguise them and prevent hacking, as the user types in the password box, asterisks (*) will appear instead of the characters that they type.',
            'nameData': null,
            'pos': 34110
          }
        ]
      }
    ],
    'customFields': [],
    'memberships': [
      {
        'id': '5bbb16f86c5c8152c7bd6651',
        'idMember': '506adbd781d742d93ae0f0dd',
        'memberType': 'admin',
        'unconfirmed': false,
        'deactivated': false
      }
    ],
    'pluginData': []
  }
}
