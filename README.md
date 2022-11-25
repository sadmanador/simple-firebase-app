### steps
0. firebase configuration copied from firebase to firebase/firebase.init.js
1. src/app.js
1-1.import googleAuthProvider, getAuth, singInWithPopup.
1-2. getAuth(app) => "app" is from firebase.init.js.
1-3. save each imported function in variable.

2. enable google sing-in-method. => console > build > authentication.
3. btn + handler is added
4. handler => signInWithPopup(auth, provider)
4-1. .then(result => const user = result.user;
console.log(user))
4-2. .catch(error => console.error(error));

---------------------------------------------------------
sign-in with github,facebook, twitter
1. add sign-in-method
2. github> developer settings > new app
3. copy client id and secret git hub to firebase
4. callback firebase to gitHub

