const firebaseConfig = {
    apiKey: "AIzaSyA6OfqxFMpxuQ4fsDid-oeWxdUhelwoMxI",
       authDomain: "talk-hub-f1982.firebaseapp.com",
      projectId: "talk-hub-f1982",     storageBucket: "talk-hub-f1982.appspot.com",
    messagingSenderId: "325725732271",
      appId: "1:325725732271:web:04b719d20dde34d1f7035a"
     };














firebase.initializeApp(firebaseConfig);

let login = document.getElementById('login');
login.addEventListener("click", (e) => {
  e.preventDefault(); // Fixed event variable name and prevent form submission

  let email = document.getElementById('email').value; // Moved email and password retrieval inside the event listener
  let password = document.getElementById('password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Login successful");
      alert('Welcome!');
      window.location.href = "./hub/index.html";
    })
    .catch((error) => {
      console.log("Login error:", error);
      // Handle login error here
      alert('Login error. Please check your credentials.');
    });
});