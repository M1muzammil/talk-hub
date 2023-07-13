import { initializeApp } from"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6OfqxFMpxuQ4fsDid-oeWxdUhelwoMxI",
       authDomain: "talk-hub-f1982.firebaseapp.com",
      projectId: "talk-hub-f1982",     storageBucket: "talk-hub-f1982.appspot.com",
    messagingSenderId: "325725732271",
      appId: "1:325725732271:web:04b719d20dde34d1f7035a"
     };
const app = initializeApp(firebaseConfig);
let createUser = document.getElementById('createUser')


let email = document.getElementById('email')
let password = document.getElementById('password')

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
createUser.addEventListener('click', ()=> {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('welcome to TALK-HUB...')
    window.location = "./index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });






})





