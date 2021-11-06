var firebaseConfig = {
      apiKey: "AIzaSyCq0E-xNqi2v988YFabanbbJVg0pdA4k7U",
      authDomain: "mycity-ayxe.firebaseapp.com",
      databaseURL: "https://mycity-ayxe-default-rtdb.firebaseio.com",
      projectId: "mycity-ayxe",
      storageBucket: "mycity-ayxe.appspot.com",
      messagingSenderId: "656089630105",
      appId: "1:656089630105:web:6455fbad13c1e18f3c7f08"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();