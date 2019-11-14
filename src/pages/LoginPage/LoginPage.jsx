import React from "react";
import { Redirect } from "react-router-dom";
import SignInOptions from "../../components/SignInOptions";

const LoginPage = ({
  user,
  handleSignIn
}) => {
  return (
    <div>
      {user ? (
        <Redirect to="/profile" />
      ) : (
        <SignInOptions
          handleSignIn={handleSignIn}
        />
      )}
    </div>
  );
};

export default LoginPage;
