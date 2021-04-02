import React from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import Google from "../../icons/google.png";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { userName: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <Container>
      <Header />
      <div className="text-center centered mt-3 login">
        <button
          className="google-button centered rounded-pill"
          onClick={handleGoogleSignIn}
        >
          <img src={Google} alt="google" />
          Continue with Google
        </button>
      </div>
    </Container>
  );
};

export default Login;
