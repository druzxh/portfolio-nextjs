import Link from "next/link";
import Image from "next/image";
// import { HiOutlineInstagram, HiOutlineLinkedin, HiOutlineGitHub } from "@heroicons/react/outline";

export default function Sidebar() {
    return (
        <>
            <div>
                <div className="flex justify-between items-centermb-5">
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <Image
                                src="https://druzxh.github.io/portfolio-nextjs/assets/logo512.png"
                                alt="Logo"
                                width={130}
                                height={130}
                            />
                        </Link>
                        <Link href="/">
                            <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                                Home
                            </button>
                        </Link>
                        <Link href="/about">
                            <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                                About
                            </button>
                        </Link>
                        <Link href="/experience">
                            <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                                Experience
                            </button>
                        </Link>
                        <Link href="/projects">
                            <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                                Projects
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="text-3xl mt-4">
                    <h1 className="text-5xl text-orange-700 mb-2">Hello Developers,</h1>
                    <p>I&apos;m Badrudin.</p>
                    <p>I build things for the web.</p>
                </div>

                <div className="m-5 rounded-lg relative overflow-hidden">
                    <div className="rounded-lg border-2 border-yellow-500">
                        <Image
                            src="https://druzxh.github.io/portfolio-nextjs/assets/profile.png"
                            alt="profile"
                            height={200}
                            width={200}
                            className="object-fit brightness-50 w-full h-full transition-transform duration-300 hover:transform hover:scale-105 hover:translate-y-[-10px] hover:translate-x-[-10px] brightness-100"
                        />
                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="https://www.instagram.com/bd.ruu" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                            IG
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/badrudin-42a598246/" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                            LinkedIn
                        </button>
                    </Link>
                    <Link href="https://github.com/druzxh?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                            Github
                        </button>
                    </Link>
                    <Link href="/assets/Badrudin_CV.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2">
                            Resume
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
{/* <div className="m-5 relative overflow-hidden">
    <div className="rounded-lg border-2 border-yellow-500 transition-transform duration-300 hover:transform hover:translate-y-2">
        <Image
            src="/assets/profile.png"
            alt="profile"
            height={200}
            width={200}
            className="object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-105 hover:translate-y-[-10px] hover:translate-x-[-10px]"
        />
    </div>
</div> */}
