import Image from 'next/image'
import Link from 'next/link'
export default function Experience() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="bg-gray-100 rounded-lg p-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-extrabold text-center mb-8">Experience</h2>
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
                </div>
            </div>
        </main>
    )
}
