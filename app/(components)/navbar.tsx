import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-400">
              Profile
            </Link>
          </li>
          {session ? (
            <li>
              <Link
                href={"/api/auth/signout"}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                LogOut
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href={"/api/auth/signin"}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                LogIn
              </Link>
            </li>
          )}
          {/* <li>
            <Link
              href={"/api/auth/signin"}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Login
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
