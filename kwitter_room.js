const firebaseConfig = {
    apiKey: "AIzaSyA93NH4cJmEshuLMZJuYJSlLlt92vhugLE",
    authDomain: "project-93-to-94.firebaseapp.com",
    projectId: "project-93-to-94",
    storageBucket: "project-93-to-94.appspot.com",
    messagingSenderId: "36522166",
    appId: "1:36522166:web:cf8d930745a0c33940be17"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Roomname= " + Room_names);
   row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
getData();

function redirectToRoomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
} 

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
