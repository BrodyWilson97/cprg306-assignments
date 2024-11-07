"use client";

import { useRouter } from "next/router";
import { useUserAuth } from "../_utils/auth-context";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    // Optional: Redirect to the landing page if user is not logged in
    if (typeof window !== "undefined") {
      router.push("/week-9");
    }
    return <p>Redirecting...</p>;
  }

  return <div>Your Shopping List Here</div>;
};

export default ShoppingListPage;


