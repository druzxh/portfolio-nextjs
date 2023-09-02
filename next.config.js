/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio-nextjs',
    assetPrefix: '/portfolio-nextjs/',
    output: 'export',
    async generateStaticParams() {
        const paths = ['/', '/about', '/experience', '/projects'];
        return paths.map((path) => ({ params: { slug: path } }));
    },
};

module.exports = nextConfig;
