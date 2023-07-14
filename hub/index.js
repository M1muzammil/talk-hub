// import {  getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { firestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";



  const firebaseConfig = {
    apiKey: "AIzaSyA6OfqxFMpxuQ4fsDid-oeWxdUhelwoMxI",
    authDomain: "talk-hub-f1982.firebaseapp.com",
   projectId: "talk-hub-f1982",
    storageBucket: "talk-hub-f1982.appspot.com",
    messagingSenderId: "325725732271",
   appId: "1:325725732271:web:04b719d20dde34d1f7035a"
 };

 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
 
 
 function createPoll(event) {
   event.preventDefault();
 
   // Get the current timestamp
   const timestamp = firebase.firestore.FieldValue.serverTimestamp();
 
   // Get input values
   const name = prompt("your name")
   
   const message = document.getElementById("message").value;
//    const commentmsg = commentmsg
   db.collection("talkhub")
     .add({
       timestamp: timestamp,
       message: message,
       name : name
    //    commentmsg: commentmsg
     })
     .then((docRef) => {
       console.log("Document written with ID:", docRef.id);
       rendermsg();
     })
     .catch((error) => {
       console.error("Error adding document:", error);
     });
 
   // Clear input fields
   document.getElementById("message").value = "";
 }
 
 function rendermsg() {
    const container = document.querySelector(".container");
  
    db.collection("talkhub")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        container.innerHTML = ""; // Clear previous chat list
  
        if (querySnapshot.empty) {
          container.innerText = "No chat found";
        } else {
          const reversedDocs = querySnapshot.docs.reverse(); // Reverse the order of the documents
  
          reversedDocs.forEach((doc) => {
            const data = doc.data();
  
            const maindiv = document.createElement("div");
            maindiv.className = "maindiv";
  
            const forimage = document.createElement("div");
            forimage.className = "forimage";
            maindiv.appendChild(forimage);



          



            const image = document.createElement("img");
            image.src = "./profile.png";
            image.style.width = "50px";
            image.style.height = "50px";
            forimage.appendChild(image);
  

            const text = document.createElement("span"); // Create a text element
            text.innerText = data.name ; // Set the text content
            forimage.appendChild(text);



            const heading = document.createElement("p");
            heading.className = "heading";
            heading.innerText = data.message;
            maindiv.appendChild(heading);
  
            const foter = document.createElement("div");
            foter.className = "foter";
            maindiv.appendChild(foter);
  
            const comment = document.createElement("button");
            comment.className = "btn btn-primary btn-sm button";
            comment.innerHTML = "<i class='bi bi-chat-left-text-fill'></i>";
            foter.appendChild(comment);
  
            const del1 = document.createElement("button");
            del1.className = "btn btn-danger btn-sm button";
            del1.innerHTML = "<i class='bi bi-trash-fill'></i>";
            del1.addEventListener("click", () => deletePoll(doc.id));
            foter.appendChild(del1);
  
            const share = document.createElement("button");
            share.className = "btn btn-dark btn-sm button";
            share.innerHTML = "<i class='bi bi-share-fill'></i>";
            foter.appendChild(share);
  
            container.insertBefore(maindiv, container.firstChild);
  
            comment.addEventListener("click", () => {
              const commentdiv = document.createElement("div");
              commentdiv.className = "comentdiv";
              maindiv.appendChild(commentdiv);
  
              const row1 = document.createElement("div");
              row1.className = "row1";
              commentdiv.appendChild(row1);
  
              const row2 = document.createElement("div");
              row2.className = "row2";
              commentdiv.appendChild(row2);
  
              const commentmsg = prompt("Enter your comment:");
              const commentbox = document.createElement("div");
              commentbox.className = "comentbox";
              commentbox.innerText = commentmsg;
              row1.appendChild(commentbox);
  
              const del = document.createElement("button");
              del.className = "btn btn-danger btn-sm button";
              del.innerHTML = "<i class='bi bi-trash-fill'></i>";
              row2.appendChild(del);
            });
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching chat:", error);
      });
  }
 
 function deletePoll(docId) {
   const password = prompt("Enter password to delete the poll:");
 
   if (password === "muzammil") {
     return db
       .collection("talkhub")
       .doc(docId)
       .delete()
       .then(() => {
         rendermsg();
       })
       .catch((error) => {
         console.error("Error deleting poll:", error);
       });
   } else {
     alert("Incorrect password. Poll not deleted.");
   }
 }
 
 document.addEventListener("DOMContentLoaded", function () {
   rendermsg();
 });
 
 const form = document.querySelector("form");
 const input = document.querySelector("form input");
 
 form.addEventListener("submit", createPoll);

































// let input = document.querySelector("form input")
// let container = document.querySelector(".container")
// let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let usertodo = input.value
    if (!usertodo) return;















      }  )
















