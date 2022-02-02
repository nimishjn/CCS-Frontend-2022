import Link from "next/link";

const notFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-center">Page not found :(</p>
            <Link href="/" passHref>
                <button className="px-4 py-2 bg-peach text-gray-dark m-4">
                    Home
                </button>
            </Link>
        </div>
    )
};

export default notFound;
