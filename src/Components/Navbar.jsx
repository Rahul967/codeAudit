import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import SignInWithGoogle from "./SignInWithGoogle";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Logo from "../images/codeaudit.png"


const Navbar = () => {
const [user, setUser] = useState(null);

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

  return (
    <nav style={{border:"0px solid black",display:"flex",justifyContent:"space-between",backgroundColor:"#1d0b59"}}>
     
      <img src={Logo} alt="logo" style={{"width":"120px",marginLeft:"20px"}}/>
       {user ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={user.photoURL} alt="Avatar" style={{ width: "40px", height: "45px", borderRadius: "50%" }} />
          <span style={{color:"white",margin: "0 10px"}} >{user.displayName}</span>
          <button style={{color:"white"}} onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <SignInWithGoogle />
      )}
    </nav>
  );
};

export default Navbar;


