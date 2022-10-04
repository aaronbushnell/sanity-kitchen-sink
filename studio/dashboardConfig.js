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
                  buildHookId: '633c94b99b3f2d00b07f95f3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9q745tir',
                  apiId: '6cbd8918-2a2c-4f7d-ae3d-e3ee797ca02d'
                },
                {
                  buildHookId: '633c94ba2d3ce00080196951',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-go1w4r5o',
                  apiId: '01e77f90-0aa7-4f6d-9e5a-24217fdcb398'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aaronbushnell/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-go1w4r5o.netlify.app', category: 'apps'}
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
