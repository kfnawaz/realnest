import React from "react";
import { useGoogleLogin } from "react-google-login";
import google_icon from "./../../icons/google.svg";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

const clientId =
  "800686250578-45v46gtkqjjkplf3c69pguijv9i4h0pe.apps.googleusercontent.com";

function Login(props) {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    console.log(
      `Logged in successfully welcome. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    props.isSignedIn(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    console.log(`Failed to login. 😢`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
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
