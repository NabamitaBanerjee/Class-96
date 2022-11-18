const firebaseConfig = {
    apiKey: "AIzaSyB-64WXoMDgA5A2IMWWxx5auY9J62vXw9c",
    authDomain: "kwitter-fac0d.firebaseapp.com",
    databaseURL: "https://kwitter-fac0d-default-rtdb.firebaseio.com",
    projectId: "kwitter-fac0d",
    storageBucket: "kwitter-fac0d.appspot.com",
    messagingSenderId: "580431590970",
    appId: "1:580431590970:web:0874f0d29c64082f29e703"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "addauser"
    });
}
