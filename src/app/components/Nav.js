"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between py-10 px-10 bg-sky-500">
      <p>Nav</p>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      {session?.user && <Link href={"/dashboard"}>Dashboard</Link>}
      {status === "loading" && <p>Loading...</p>}
      {status === "unauthenticated" && (
        <button
          className="rounded-md py-3 px-7 bg-yellow-500"
          onClick={() => signIn("")}
        >
          Sign in
        </button>
      )}

      {status === "authenticated" && (
        <button
          className="rounded-md py-3 px-7 bg-yellow-500"
          onClick={() => signOut("")}
        >
          Sign out
        </button>
      )}
      <div>
        {session ? (
          <>
            <p>{session?.user?.name}</p>
            <Image width={40} height={40} src={session?.user?.image} alt="" />
          </>
        ) : (
          <p>Not signed in</p>
        )}
      </div>
    </div>
  );
};

export default Nav;
