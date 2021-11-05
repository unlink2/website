
export default {
    target: 'static', // default is 'server'
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Personal website of Lukas Krickl',
        name: 'krickl.dev',
        content: 'A portfolio website for all my little open-source tools'
      }
    ],

    components: true,
    modules: [
        'nuxt-buefy'
    ]
}
