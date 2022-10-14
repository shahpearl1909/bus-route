var  firebaseConfig = {
      apiKey: "AIzaSyC1ZGdh7yojgTFXIl0q756saDmKmswa-xQ",
      authDomain: "bus-route-63710.firebaseapp.com",
      databaseURL: "https://bus-route-63710-default-rtdb.firebaseio.com",
      projectId: "bus-route-63710",
      storageBucket: "bus-route-63710.appspot.com",
      messagingSenderId: "770116929448",
      appId: "1:770116929448:web:3044f805ec5ac48c7fff9d"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name"); 
    document.getElementById("Username").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding rooms"
      });
      localStorage.setItem("room_name ", room_name);
      window.location="kwitter_page.html";
    }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      console.log("room name "+Room_names);
      row="<div class='room name ' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function login_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}