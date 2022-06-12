const firebaseConfig = {
      apiKey: "AIzaSyCy_lBCOdRmkNPMksYXa0DbHS3fD0jAQ64",
      authDomain: "chat-cd1b8.firebaseapp.com",
      databaseURL: "https://chat-cd1b8-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "chat-cd1b8",
      storageBucket: "chat-cd1b8.appspot.com",
      messagingSenderId: "222405129979",
      appId: "1:222405129979:web:262e08faf2c996522f225e",
      measurementId: "G-08ZC67EHV1"
    };
    
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "! ";

function addRoom()
{
      room_name = document.getElementById("roon_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = kwitter_page.html;
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}