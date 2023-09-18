import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const user = await getCurrentUser();
  return (
    <nav className="bg-zinc-700 px-4 flex justify-between items-center">
      <Link href="/">
        <Image alt="logo" src="/ecoHouse.svg" height={60} width={60} />
      </Link>
      {/* <ul className="flex  text-base font-medium text-neutral-200 space-x-4">
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul> */}
      {user ? (
        <div className="flex flex-col items-center rounded-full font-bold text-3xl text-neutral-100">
          <Image src={user?.image} alt="user" height={60} width={60} />
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-full font-bold text-md text-neutral-100">
          <Link href="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}
