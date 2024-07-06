
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import SignInWithGoogle from "./SignInWithGoogle";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "../images/codeaudit.png";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User logged out successfully", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, {
          position: "top-center",
        });
      });
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      {user ? (
        <div className="user-info">
          <img src={user.photoURL} alt="Avatar" className="avatar" />
          <span className="username">{user.displayName}</span>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              width: "100px",
              height: "40px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            className="home-btn"
            onClick={navigateToHome}
          >
            Home
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              width: "100px",
              height: "40px",
              borderRadius: "5px",
            }}
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <SignInWithGoogle />
      )}
    </nav>
  );
};

export default Navbar;
