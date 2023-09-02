/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio-nextjs',
    assetPrefix: '/portfolio-nextjs/',
    output: 'export',
    async generateStaticParams() {
        const paths = ['/', '/about', '/experience', '/projects']; // Gantilah dengan daftar halaman yang Anda inginkan
        return paths.map((path) => ({ params: { slug: path } }));
    },
};

module.exports = nextConfig;
