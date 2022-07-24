import { useState } from "react";
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch(error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch(error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <div className="App">

      <div className='app__registerForm'>
        <h2>Register User</h2>
        <input placeholder='Email...' onChange={(event) => {setRegisterEmail(event.target.value)}} />
        <input placeholder='Password' onChange={(event) => {setRegisterPassword(event.target.value)}} /> 
        <button onClick={ register } >Create User</button>
      </div>


      <div className='app__loginForm'>
        <h2>Login</h2>
        <input placeholder='Email...' onChange={(event) => {setLoginEmail(event.target.value)}} />
        <input placeholder='Password' onChange={(event) => {setLoginPassword(event.target.value)}} />
        <button onClick={login} >Login</button>
      </div>

      <div className='app__displayuser'>
        <h2> User Loged In:</h2>
        {user?.email}

        <button onClick={ logout }>Sign Out</button>
      </div>

    </div>
  );
}

export default App;
