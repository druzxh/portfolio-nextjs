import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="bg-gray-100 p-12 rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Stack 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">React JS</h3>
              <p className="text-gray-700">We create responsive and user-friendly websites to help you grow your online presence.</p>
            </div>

            {/* Tech Stack 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Vue JS</h3>
              <p className="text-gray-700">Our team specializes in developing mobile apps for iOS and Android platforms.</p>
            </div>

            {/* Tech Stack 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Next JS</h3>
              <p className="text-gray-700">We focus on creating visually appealing and intuitive user interfaces for your products.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Tech Stack 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Bootstrap</h3>
              <p className="text-gray-700">We create responsive and user-friendly websites to help you grow your online presence.</p>
            </div>

            {/* Tech Stack 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Material UI</h3>
              <p className="text-gray-700">Our team specializes in developing mobile apps for iOS and Android platforms.</p>
            </div>

            {/* Tech Stack 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tailwind</h3>
              <p className="text-gray-700">We focus on creating visually appealing and intuitive user interfaces for your products.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-100 p-12 ">
        <div className="container mx-auto">
          <div className="bg-gray-200 p-12 rounded-lg">
            <h2 className="text-3xl font-extrabold text-center mb-8">Can I Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Fullstack App</h3>
                <p className="text-gray-700">We create responsive and user-friendly websites to help you grow your online presence.</p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Frontend App </h3>
                <p className="text-gray-700">We focus on creating visually appealing and intuitive user interfaces for your products.</p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Backend App</h3>
                <p className="text-gray-700">Our team specializes in developing mobile apps for iOS and Android platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">10 Tips for Effective Web Design</h3>
              <p className="text-gray-700">Learn valuable tips for creating a successful web design that engages your audience.</p>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">The Future of Mobile App Development</h3>
              <p className="text-gray-700">Explore the latest trends and technologies shaping the future of mobile app development.</p>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Designing an Intuitive User Experience</h3>
              <p className="text-gray-700">Discover the key principles and practices for creating an intuitive user experience in your products.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8">Contact Me</h2>
          <div className="grid">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 text-center">
                Have questions or want to discuss a project? Feel free to <a href="/contact" className="text-blue-500 hover:underline">contact me</a> anytime.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-center">Lets Build.</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
