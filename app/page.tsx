import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <>
      {user ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-3xl text-black">
          <h1>Oi {user?.name}!</h1>

          <p className="text-lg"> You are logged as {user?.role}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-3xl text-black">
          Oi!
        </div>
      )}
    </>
  );
}
