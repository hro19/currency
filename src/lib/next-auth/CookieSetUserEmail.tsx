"use client";

import React, { useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useCookie } from "react-use";

const UseremailSetCookie = () => {
  const { data: session } = useSession();
  const [, updateCookie] = useCookie("userEmail");

  const updateCookieHandler = useCallback(
    (userEmail: string) => {
      updateCookie(userEmail);
    },
    [updateCookie]
  );

  useEffect(() => {
    updateCookieHandler(session?.user?.email as string);
  }, [session, updateCookieHandler]);

  return <></>;
};

export default UseremailSetCookie;
