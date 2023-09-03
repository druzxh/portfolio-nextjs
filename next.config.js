// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     basePath: '/portfolio-nextjs',
//     assetPrefix: '/portfolio-nextjs/',
//     output: 'export',
//     async generateStaticParams() {
//         const paths = ['/', '/about', '/experience', '/projects', '/assets/Badrudin_CV.pdf'];
//         return paths.map((path) => ({ params: { slug: path } }));
//     },
// };

// module.exports = nextConfig;

// Config development
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['druzxh.github.io'],
    },
};

module.exports = nextConfig;