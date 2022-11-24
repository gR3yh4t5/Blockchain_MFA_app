import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isLoading, user } = useAuth0();
  return (
    !isLoading && user &&(
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
              }
    >
      Log Out
    </button>
    )
  );
};

export default LogoutButton;
