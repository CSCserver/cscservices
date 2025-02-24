const firebaseConfig = {
    apiKey: "AIzaSyDH8a0kq8TQG5DvPbIhx0TettNhtiw3Evs",
    authDomain: "csc-212f1.firebaseapp.com",
    databaseURL: "https://csc-212f1-default-rtdb.firebaseio.com",
    projectId: "csc-212f1",
    storageBucket: "csc-212f1.firebasestorage.app",
    messagingSenderId: "483932792927",
    appId: "1:483932792927:web:54fea42075b0abfab453ea",
    measurementId: "G-Q99VS3599W"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phonenumber = getElementVal("phonenumber");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, phonenumber, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
    
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, phonenumber, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phonenumber: phonenumber,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  