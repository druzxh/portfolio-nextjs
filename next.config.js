/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio-nextjs',
    assetPrefix: '/portfolio-nextjs/',
};

module.exports = {
    ...nextConfig,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/home': { page: '/home' },
            '/about': { page: '/about' },
            '/experience': { page: '/about' },
            '/projects': { page: '/projects' },
        };
    },
};
