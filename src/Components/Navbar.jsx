


import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import SignInWithGoogle from "./SignInWithGoogle";
import { signOut } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../images/codeaudit.png";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear(); // Clear sessionStorage
        toast({
          title: "User logged out successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/"); // Redirect to home page
      })
      .catch((error) => {
        toast({
          title: `Error: ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToDashboard = () => {
    const storedAnswer = sessionStorage.getItem('parsedAnswer');
    const defaultAnswer = JSON.stringify({
      title: "",
      feedback: {
        "Inline Comments": [],
        Suggestions: []
      },
      summary: {
        Strengths: [],
        "Areas for Improvement": []
      }
    });

    if (storedAnswer && storedAnswer !== defaultAnswer) {
      navigate("/dashboard");
    } else {
      toast({
        title: "There is nothing in the dashboard",
        description: "Insert your query",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      {user ? (
        <div className="user-info">
          <img src={user.photoURL} alt="Avatar" className="avatar" />
          <span className="username">{user.displayName}</span>
          {location.pathname === "/" ? (
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                width: "100px",
                height: "40px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
              className="dashboard-btn"
              onClick={navigateToDashboard}
            >
              Dashboard
            </button>
          ) : (
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
          )}
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
