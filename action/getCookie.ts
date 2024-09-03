import { cookies } from "next/headers";

export const getUserCookie = () => {
  const getCookie = cookies();

  return getCookie;
};
