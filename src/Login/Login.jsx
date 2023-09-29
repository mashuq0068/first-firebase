import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import app from "../assets/firebase/firebaseinit";
import { useState } from "react";


const Login = () => {
    const [name , setName]  =useState(null)
    const [email,setEmail] = useState(null)
    const [user , setUser] = useState(null)
   
    const auth = getAuth(app)
    console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const handleAuth = () => {
       signInWithPopup(auth , googleProvider )
       .then((data )=> {
       setName(data.user.displayName)
       setEmail(data.user.email)
        
       })
       .catch((error) => {
        console.log(error.massage)
       })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then((data )=> {
            console.log(data)
            console.log("signOut seccessFully")
           setEmail(null)
           setName(null)
        })
        .catch((error) => {
            console.log(error)
        })
        
    }
    const handleGithub = () =>{
        signInWithPopup(auth , githubProvider)
        .then(data => {
            setUser(data.user.photoURL)
        })
        .catch(error => {
            console.log(error.massage)
        })
    }
    
    return (
        <div className="p-20">
          
            <p className="ml-5 mb-10">This is login</p>
          
            {!name ? <><button onClick={handleAuth} className="rounded-lg bg-sky-500 border-0 shadow-xl drop-shadow-xl hover:bg-sky-800 font-bold text-white py-2 px-4" style={
                {
                    
                   
                    cursor:"pointer"
                    
                }
            }>Login with google</button> 
            <button onClick={handleGithub} className="ml-7 bg-green-600 text-white font-bold text-base drop-shadow-xl shadow-xl hover:bg-green-800 px-4 py-2 rounded-lg">open with github</button>
            
          </>
            : 
           <button onClick={handleSignOut}>Sign Out</button>}
            {name &&
           <div>
           <p className="text-3xl font-bold">Name: {name}</p>
            <p className="text-3xl font-bold">Email : {email}</p>
           
           </div>}
           <p>user : <img src={user} alt="" /></p>
        </div>
    );
};

export default Login;