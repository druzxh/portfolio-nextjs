import Link from "next/link";

export default function Sidebar() {
    return (
        <>
            <div>
                <h1 className="text-5xl text-orange-700">Hello Developers,</h1>
            </div>
            <div className="text-3xl mt-4">
                <p>I&apos;m Badrudin.</p>
                <p>I build things for the web.</p>
            </div>
            <div className="mt-4 ">
                <Link href={"/"}>
                    <button className="rounded-full bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Home</button>
                </Link>
            </div>
            <div className="mt-4 ">
                <Link href={"/about"}>
                    <button className="rounded-full bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">About</button>
                </Link>
            </div>
            <div className="mt-4 ">
                <Link href={"/experience"}>
                    <button className="rounded-full bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Experience</button>
                </Link>
            </div>
            <div className="mt-4 ">
                <Link href={"/projects"}>
                    <button className="rounded-full bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Projects</button>
                </Link>
            </div>
        </>
    )
}