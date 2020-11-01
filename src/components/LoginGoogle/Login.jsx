import React from "react";
import { useGoogleLogin } from "react-google-login";
import google_icon from "./../../icons/google.svg";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

const clientId =
  "900371630577-pem6p0r80k2tc7sd0025b732hju6f4e3.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    // console.log("Login Success: currentUser:", res.profileObj);
    console.log(
      `Logged in successfully welcome. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    // console.log("Login failed: res:", res);
    console.log(`Failed to login. 😢`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
    isSignedIn: true,
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={signIn}
      className="button"
    >
      <img
        style={{ width: 40, marginRight: 10 }}
        src={google_icon}
        alt="google login"
        className="icon"
      />

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default Login;
