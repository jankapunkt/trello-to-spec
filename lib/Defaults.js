export const DefaultLabels = {
  members: 'Members',
  authors: 'Authors',
  closed: 'Closed',
  lastActivity: 'Last activity',
  due: 'Due'
}

export const DefaultLayout = {
  card: {
    border: true,

    header: {
      title: {
        class: [ 'card-title', 'clearfix' ]
      },
      labels: {
        class: [ 'float-right' ]
      },
      hr: true
    },
    body: {
      desc: true,
      attachments: {
        class: ['card'],
        image: {
          class: ['card-img-top']
        },
        other: {
          class: ['jumbotron', 'text-center']
        },
        desc: {
          class: ['card-body']
        }
      },
      checklists: {
        icons: {
          complete: {
            class: [ 'fa-li fa fa-check-square text-muted' ]
          },
          incomplete: {
            class: [ 'fa-li fa fa-square-o' ]
          },
        },
        label: {
          complete: {
            class: [ 'text-muted' ]
          },
          incomplete: {
            class: []
          }
        }
      },
      attachements: true,
    },
    footer: {
      hr: true,
      due: true,
      lastActivity: true,
      members: true
    }
  }
}