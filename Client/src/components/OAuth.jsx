import { Button } from "flowbite-react";
import React from "react";
import { GrGoogle } from "react-icons/gr";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singInSuccess } from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth(app);
  const handleGoogleOAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultGoogle = await signInWithPopup(auth, provider);
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultGoogle.user.displayName,
          email: resultGoogle.user.email,
          photoURLGoogle: resultGoogle.user.photoURL,
        }),
      });

      const data = await response.json();

      if (response.ok || data.success) {
        dispatch(singInSuccess(data));
        console.log("Navigating to home From Google OAuth...");
        navigate("/");
      }
    } catch (error) {
      console.log("Google OAuth Error...");
    }
  };

  return (
    <Button
      type="button"
      className="text-center"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleOAuth}
    >
      <GrGoogle className="w-5 h-5 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
