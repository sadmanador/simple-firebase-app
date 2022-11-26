import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState({})

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error)
      })
  }

  const handleGitHubSingIn = () => {
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error('error: ', error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({})
      })
  }


  return (
    <div className="App">
      {
        user.uid ?
          <button onClick={handleSignOut}>sign-out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google signin</button>
            <button onClick={handleGitHubSingIn}>Signin with github</button>
          </>

      }
      {user.uid && <div className="user-info">
        <h2>User: {user.displayName}</h2>
        <p>email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
