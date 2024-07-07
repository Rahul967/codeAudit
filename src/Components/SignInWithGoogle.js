import { GoogleAuthProvider, OperationType, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
   
      const user = result.user;
      console.log(user.displayName,"name")
      console.log(user.photoURL,"image")

      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div>
    
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer",marginTop:"10px" }}

        onClick={googleLogin}
      >
        <img 
        
        style={{ border:"0px solid red" }}
        src="https://github.com/the-debug-arena/Login-Auth-Firebase-ReactJS/blob/main/src/google.png?raw=true"  width={"200px"} height={"50px"}/>
      </div>
    </div>
  );
}
export default SignInwithGoogle;