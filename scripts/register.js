import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "psymetricsolutions.firebaseapp.com",
  projectId: "psymetricsolutions",
  storageBucket: "psymetricsolutions.appspot.com",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert("Please fill in all fields.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert("Account created successfully!");

            document.getElementById('email').value = '';
            document.getElementById('password').value = '';

            window.location.href = '/index.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
