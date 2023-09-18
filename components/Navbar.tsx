import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const user = await getCurrentUser();
  return (
    <nav className="sticky  top-0 left-0 border-b border-b-black/5 drop-shadow-sm z-20  px-4 flex justify-between items-center backdrop-blur-sm ">
      <Link href="/">
        <Image
          alt="logo"
          src="/ecoHouse.svg"
          height={40}
          width={40}
          className="opacity-100"
        />
      </Link>

      {user ? (
        <div className="flex flex-col items-center rounded-full font-bold text-3xl text-neutral-100">
          <Image src={user?.image} alt="user" height={60} width={60} />
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-full font-bold text-md text-slate-800">
          <Link href="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}
