// Register.js
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        // auth().currentUser.sendEmailVerification()
        // data.user.sendEmailVerification();
        updateProfile(auth.currentUser, {
          displayName: Name,
        }).then(() => {
          console.log(auth.currentUser.displayName);
          sendEmailVerification(auth.currentUser).then(() => {
            signOut(auth).then(() => {
              alert("Mail Sent Succesfully");
            });
          });
        });
      })
      .catch((error) => {
        alert(error);
        // alert(password + email);
      });
    // Implement registration logic here
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            // type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <button
        onClick={() => {
          sendPasswordResetEmail(auth, email).then(() => {
            alert("Pasword Resent Link sent");
          });
        }}
      >
        Forget password
      </button>
      <button
        onClick={() => {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              console.log("vsv");
              if (!auth.currentUser.emailVerified) {
                alert("User not Verified");
                signOut(auth);
              } else {
                alert("user Logged In");
              }
            })
            .catch((e) => {
              alert(e);
            });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Register;
