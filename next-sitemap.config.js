module.exports = {
  siteUrl: 'https://www.keepcool.co',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/admin/'],
      },
    ],
  },
}
