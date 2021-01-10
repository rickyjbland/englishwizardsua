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
                  buildHookId: '5ffb427734de3f126b12376e',
                  title: 'Sanity Studio',
                  name: 'englishwizardsua-studio',
                  apiId: '79420248-b34e-4cfb-b6dc-f1feb46997a1'
                },
                {
                  buildHookId: '5ffb42770cc6c37e083388c3',
                  title: 'Blog Website',
                  name: 'englishwizardsua',
                  apiId: '37d5067a-65f9-4f50-be9d-b7d4806569d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rickyjbland/englishwizardsua',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://englishwizardsua.netlify.app', category: 'apps'}
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
