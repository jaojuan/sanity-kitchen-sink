export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602721fc18d0d2180bc23051',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2bok5rty',
                  apiId: 'd28456b2-3b04-46d9-8a32-44a9a14f6b35'
                },
                {
                  buildHookId: '602721fc8ca5c513415b3229',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7gda1nst',
                  apiId: '0ee69b89-b486-44f5-8cae-5f9d7f498afa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaojuan/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7gda1nst.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
