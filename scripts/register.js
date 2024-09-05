import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABCK5AOwsw0CgZCfqeZCREBx5xfQbtfW4",
  authDomain: "psymetricsolutions.firebaseapp.com",
  projectId: "psymetricsolutions",
  storageBucket: "psymetricsolutions.appspot.com",
  messagingSenderId: "",
  appId: "1:826794938922:web:4ae8b184a5e7c45faf2953",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


function populateUserData(userData) {
    
    document.getElementById('email').value = userData.email || '';
    document.getElementById('fullName').value = userData.fullName || '';
    document.getElementById('birthday').value = userData.birthday || '';
    document.getElementById('phone').value = userData.phone || '';

    
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.src = userData.profilePicture || 'default-profile-pic-url';
    }

    
    const dynamicName = document.getElementById('dynamic-name');
    const toggleImage = document.getElementById('toggleImage');
    if (dynamicName) {
        dynamicName.textContent = userData.fullName || 'Default Name';
    }
    if (toggleImage) {
        toggleImage.src = userData.profilePicture || 'default-profile-pic-url'; 
    }
}

document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert("Please fill in all fields.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            
            try {
                await setDoc(doc(db, "users", user.uid), {
                    birthday: "",             
                    email: user.email,        
                    fullName: "",             
                    phone: "",                
                    profilePicture: ""        
                });

            
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                   
                    populateUserData(userData);

                    alert("Account created and user data retrieved successfully!");

                    
                    document.getElementById('password').value = '';

                    
                    window.location.href = '/index.html';
                } else {
                    console.error("No user data found in Firestore.");
                }
            } catch (error) {
                console.error("Error saving or retrieving user data from Firestore: ", error);
                alert("Account created, but there was an error saving or retrieving your data. Please try again.");
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
