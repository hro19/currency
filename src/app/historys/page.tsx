import { getAuthSession } from "@/lib/next-auth/getAuthSession";
import { LoginButton, LogoutButton } from "@/components/buttons";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        {session && <LogoutButton />}
        {!session && <LoginButton />}
      </div>
    </main>
  );
}
