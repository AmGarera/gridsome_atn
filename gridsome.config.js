module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://api.androidtv.news'
      }
    }
  ]
}
