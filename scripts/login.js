import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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

document.getElementById('login-form').addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return;
    }

    if (email === '' || password === '') {
        alert("Please fill in all fields");
        return;
    }

    // Directly call signInWithEmailAndPassword without setting persistence
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Logged in successfully!");

            document.getElementById('email').value = '';
            document.getElementById('password').value = '';

            window.location.href = '/pages/home.html';
        })
        .catch((error) => {
            let errorMessage;
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'Your account has been disabled';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No account found with this email';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password. Please try again';
                    break;
                default:
                    errorMessage = 'Incorrect email or password. Please try again';
            }
            alert(errorMessage);
        });
});

