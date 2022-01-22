import { useState } from "react";

import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../config";
const responseGoogle = (response) => {
  console.log(response);
};
const handleLogin = async (googleData, setEditAllowed, setEmail) => {
  const res = await fetch("/api/google", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (data.valid) {
    setEditAllowed(true);
    console.log(data.email);
    setEmail(data.email);
  } else {
    setEditAllowed(false);
    setEmail("");
    window.alert(data.message);
  }
};

export function Login({ editAllowed, setEditAllowed }) {
  const [email, setEmail] = useState("");
  return (
    <div>
      {!editAllowed && (
        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            color: "black",
            fontSize: "small",
          }}
        >
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Admin Login"
            onSuccess={(data) => handleLogin(data, setEditAllowed, setEmail)}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}

      {editAllowed && (
        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            color: "black",
            fontSize: "x-small",
            fontWeight: "bold",
          }}
        >
          {email}
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={() => {
              setEditAllowed(false);
              setEmail("");
            }}
          ></GoogleLogout>
        </div>
      )}
    </div>
  );
}
