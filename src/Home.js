import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Thank you for sign up our website.</p>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
