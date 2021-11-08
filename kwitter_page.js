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
room_name=localStorage.getItem("room_name");
function Send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();
