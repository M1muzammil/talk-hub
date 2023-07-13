

//   const firebaseConfig = {
//     apiKey: "AIzaSyA6OfqxFMpxuQ4fsDid-oeWxdUhelwoMxI",
//     authDomain: "talk-hub-f1982.firebaseapp.com",
//    projectId: "talk-hub-f1982",
//     storageBucket: "talk-hub-f1982.appspot.com",
//     messagingSenderId: "325725732271",
//    appId: "1:325725732271:web:04b719d20dde34d1f7035a"
//  };
  
  
//  const app = initializeApp(firebaseConfig);
//  const db = firebase.firestore();
//  function creatmsg() {

//  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
//  // Get input values
//  const message= document.getElementById("message").value;


//  db.collection("talkhub").add({
//    timestamp: timestamp,
//    message: message,
   
//  })
//    .then((docRef) => {
//      console.log("Document written with ID: ", docRef.id);
//      rendermessage();
//    })
//    .catch((error) => {
//      console.error("Error adding document: ", error);
//    });

//  // Clear input fields
//  document.getElementById("message").value = "";
 
// }


let input = document.querySelector("form input")
let container = document.querySelector(".container")
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let usertodo = input.value
    if (!usertodo) return;






let maindiv = document.createElement("div");
maindiv.className +="maindiv"
container.appendChild(maindiv);




let forimage = document.createElement("div");
forimage.className +="forimage";
maindiv.appendChild(forimage);

let image = document.createElement("img");
 
image.src = "./profile.png";
image.style.width = "50px";
image.style.height = "50px";
  forimage.appendChild(image);




let heading = document.createElement("p")
    heading.className += " heading"
    heading.innerText = input.value
    maindiv.appendChild(heading)






    let foter = document.createElement("div");
    foter.className += "foter";
    maindiv.appendChild(foter)




     let comment = document.createElement("button")
      comment.className += "btn btn-primary btn-sm button"
     comment.innerHTML = "<i class='bi bi-chat-left-text-fill'></i>"
     foter.appendChild(comment)
 let del = document.createElement("button")
     del.className += "btn btn-danger btn-sm button"
      del.innerHTML = "<i class='bi bi-trash-fill'></i>"
     foter.appendChild(del)


 let share = document.createElement("button")
       share.className += "btn btn-dark btn-sm button"
       share.innerHTML = "<i class='bi bi-share-fill'></i>"
     foter.appendChild(share)










     container.insertBefore(maindiv, container.firstChild);



comment.addEventListener("click" , ()=>{

    

    let commentdiv = document.createElement("div");
    commentdiv.className+= "comentdiv"
    maindiv.appendChild(commentdiv)  

    




let row1 = document.createElement("row");
row1.className+= "row1";
commentdiv.appendChild(row1)
let row2 = document.createElement("row");
row1.className+= "row2";
commentdiv.appendChild(row2)


let commentmsg = prompt("enter your comment ");
let comentbox = document.createElement("div");
comentbox.className += "comentbox";
comentbox.innerText = commentmsg
row1.appendChild(comentbox);


let del = document.createElement("button")
del.className += "btn btn-danger btn-sm button"
 del.innerHTML = "<i class='bi bi-trash-fill'></i>"
row2.appendChild(del)














})










      }  )
















