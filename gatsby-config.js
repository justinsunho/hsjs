module.exports = {
    siteMetadata: {
        siteTitle: `hs.js`,
        defaultTitle: `hs.js`,
        siteTitleShort: `hs.js`,
        siteDescription: `A Web Development Course for High Schoolers`,
        siteUrl: `https://hsjs.netlify.app`,
        siteAuthor: `@justinsunho`,
        siteLanguage: `en`,
        themeColor: `#8257E6`,
        basePath: `/`,
    },
    flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [
        {
            resolve: `@rocketseat/gatsby-theme-docs`,
            options: {
                configPath: `src/config`,
                docsPath: `src/docs`,
                repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
                baseDir: `examples/gatsby-theme-docs`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://hsjs.netlify.app`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
