### steps
1. src/app.js
1-1.import googleAuthProvider, getAuth, singInWithPopup.
1-2. getAuth(app) => "app" is from firebase.init.js.
1-3. save each imported function in variable.

2. enable google sing-in-method. => console > build > authentication.
3. btn + handler is added
4. handler => signInWithPopup(auth, provider)
5. .then(result => const user = result.user;
console.log(user))
6. .catch(error => console.error(error));