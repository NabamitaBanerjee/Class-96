const firebaseConfig = {
      apiKey: "AIzaSyB-64WXoMDgA5A2IMWWxx5auY9J62vXw9c",
      authDomain: "kwitter-fac0d.firebaseapp.com",
      databaseURL: "https://kwitter-fac0d-default-rtdb.firebaseio.com",
      projectId: "kwitter-fac0d",
      storageBucket: "kwitter-fac0d.appspot.com",
      messagingSenderId: "580431590970",
      appId: "1:580431590970:web:0874f0d29c64082f29ew03"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("roomname - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) { console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}