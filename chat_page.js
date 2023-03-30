var firebaseConfig = {
    apiKey: "AIzaSyDqBkct8j5kH6v4b4fyHlpEtxffRRuYsj0",
  
    authDomain: "c100-c39d7.firebaseapp.com",
    databaseURL: "https://c100-c39d7-default-rtdb.firebaseio.com",
    projectId: "c100-c39d7",
    storageBucket: "c100-c39d7.appspot.com",
    messagingSenderId: "347882223500",
    appId: "1:347882223500:web:ad168afbcdb539b6a348a9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  room_name=localStorage.getItem("room_name")
   user_name=localStorage.getItem("user_name")
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,

        like:0,
    })

    document.getElementById("msg").value = "";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}