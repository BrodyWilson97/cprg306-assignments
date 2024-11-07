"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <div>
          <p>Please log in to continue:</p>
          <button onClick={handleSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

