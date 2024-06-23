/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.minexdrill.com/',
    exclude: [
        '/icon.svg', 
        '/apple-icon.png', 
        '/manifest.webmanifest', 
        '/tags/*',
        '/tr',
        '/en',
       
    ],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    },
    additionalPaths: async (config) => [
        await config.transform(config, '/home'),
        await config.transform(config, '/about'),
        await config.transform(config, '/contact'),
        await config.transform(config, '/isg'),
        await config.transform(config, '/machines'),

        await config.transform(config, '/quality'),
        await config.transform(config, '/services'),

    ],
    additionalSitemaps: [
        'https://www.cukurderesondaj.com.tr/my-custom-sitemap-1.xml',
        'https://www.cukurderesondaj.com.tr/my-custom-sitemap-2.xml',
    ],
}
