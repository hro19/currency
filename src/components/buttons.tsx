"use client";

import { signIn, signOut } from "next-auth/react";
import { User } from "lucide-react";
import { Button } from "@chakra-ui/react";

// ログインボタン
export const LoginButton = () => {
  return (
    <Button className="bg-slate-200" size="sm" onClick={() => signIn()}>
      <User size={16} />
    </Button>
  );
};

// ログアウトボタン
// export const LogoutButton = () => {
//   return (
//     <button style={{ marginRight: 10 }} onClick={() => signOut()}>
//       Sign Out
//     </button>
//   );
// };
