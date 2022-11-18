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
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}