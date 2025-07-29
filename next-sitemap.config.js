module.exports = {
  siteUrl: 'https://subscribe.keepcool.co',
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
