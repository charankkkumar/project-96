var firebaseConfig = {
      apiKey: "AIzaSyCYaBiwCnXAxYna0FOmRAMHTkuHClMMoYk",
      authDomain: "kwitter-c95-31ca6.firebaseapp.com",
      databaseURL: "https://kwitter-c95-31ca6-default-rtdb.firebaseio.com",
      projectId: "kwitter-c95-31ca6",
      storageBucket: "kwitter-c95-31ca6.appspot.com",
      messagingSenderId: "15238202966",
      appId: "1:15238202966:web:d942b75fdbfb6186679df7"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot)
       {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) 
             {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}