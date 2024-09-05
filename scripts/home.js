import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

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
const storage = getStorage(app);

document.addEventListener('DOMContentLoaded', function() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;

            const cachedData = localStorage.getItem(`user-${uid}`);
            if (cachedData) {
                populateUserData(JSON.parse(cachedData));
            } else {
                try {
                    const docRef = doc(db, 'users', uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        localStorage.setItem(`user-${uid}`, JSON.stringify(userData)); 
                        populateUserData(userData);
                    } else {
                        console.log("No user data found");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        } else {
            window.location.href = "/index.html";
        }
    });

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

    function validateInput(input) {
        if (input.value.trim()) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            return true;
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            return false;
        }
    }

    function validateAllRequiredInputs() {
        const fullNameValid = validateInput(document.getElementById('fullName'));
        const birthdayValid = validateInput(document.getElementById('birthday'));
        const phoneValid = validateInput(document.getElementById('phone'));
        return fullNameValid && birthdayValid && phoneValid;
    }

    document.getElementById('toggleImage').addEventListener('click', function() {
        const panel = document.getElementById('panel');
        const settings = document.getElementById('settings');
        const dynamicName = document.getElementById('dynamic-name');
        const footer = document.getElementById('footer');

        if (!panel.classList.contains('none')) {
            panel.classList.add('none');
            footer.classList.add('none');
            settings.classList.remove('none');
            dynamicName.textContent = 'Settings'; 
        } else {
            if (!validateAllRequiredInputs()) {
                alert('Please fill out all required fields.');
            } else {
                panel.classList.remove('none');
                footer.classList.remove('none');
                settings.classList.add('none');
                dynamicName.textContent = document.getElementById('fullName').value.trim();
            }
        }
    });

    document.getElementById('fullName').addEventListener('input', function() {
        validateInput(this);
    });

    document.getElementById('birthday').addEventListener('input', function() {
        validateInput(this);
    });

    document.getElementById('profilePicture').addEventListener('change', function(event) {
        const file = event.target.files[0]; 
        if (file) {
            const storageRef = ref(storage, 'profilePictures/' + auth.currentUser.uid);

            uploadBytes(storageRef, file).then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            }).then((downloadURL) => {
                const profileImg = document.querySelector('.profile-img');
                profileImg.src = downloadURL;

                const user = auth.currentUser;
                if (user) {
                    const uid = user.uid;
                    return setDoc(doc(db, 'users', uid), {
                        profilePicture: downloadURL
                    }, { merge: true });
                }
            }).catch((error) => {
                console.error("Error uploading image: ", error);
            });
        }
    });

document.getElementById('save-changes').addEventListener('click', async function(event) {
    event.preventDefault();

    if (!validateAllRequiredInputs()) {
        alert('Please fill out all required fields before saving.');
        return;
    }

    const userConfirmed = confirm("Are you sure you want to save changes?");
    if (userConfirmed) { 
        const profileImgSrc = document.querySelector('.profile-img').src; 
        const toggleImage = document.getElementById('toggleImage');
        if (toggleImage) { 
            toggleImage.src = profileImgSrc; 
        } else {
            console.error('Toggle image element not found');
        }

        const fullName = document.getElementById('fullName').value.trim(); 
        const dynamicName = document.getElementById('dynamic-name'); 
        dynamicName.textContent = fullName; 

        const panel = document.getElementById('panel');
        const settings = document.getElementById('settings');
        const footer = document.getElementById('footer');

        if (panel) {
            panel.classList.remove('none');
        }
        if (footer) {
            footer.classList.remove('none');
        }
        if (settings) {
            settings.classList.add('none');
        }

        const user = auth.currentUser;
        if (user) {
            const uid = user.uid;
            try {
                await setDoc(doc(db, 'users', uid), {
                    email: document.getElementById('email').value.trim(),
                    fullName: fullName,
                    birthday: document.getElementById('birthday').value.trim(),
                    phone: document.getElementById('phone').value.trim(),
                    profilePicture: profileImgSrc 
                }, { merge: true });
                alert('Changes saved successfully!');
                localStorage.setItem(`user-${uid}`, JSON.stringify({
                    email: document.getElementById('email').value.trim(),
                    fullName: fullName,
                    birthday: document.getElementById('birthday').value.trim(),
                    phone: document.getElementById('phone').value.trim(),
                    profilePicture: profileImgSrc
                }));
            } catch (error) {
                console.error("Error saving user data:", error);
            }
        }
    } else {
        console.log('Changes were not saved.');
    }
});

    const phoneInput = document.getElementById('phone');
    const phoneFeedback = document.getElementById('phoneFeedback');

    function validatePhoneNumber() {
        let value = phoneInput.value;

        if (value.length === 10) {
            phoneInput.classList.remove('is-invalid');
            phoneInput.classList.add('is-valid');
            phoneFeedback.style.display = 'none';
        } else {
            phoneInput.classList.add('is-invalid');
            phoneFeedback.style.display = 'block';
        }
    }

    phoneInput.addEventListener('focus', function() {
        validatePhoneNumber();
    });

    phoneInput.addEventListener('blur', function() {
        validatePhoneNumber();
    });

    phoneInput.addEventListener('input', function() {
        validatePhoneNumber();
    });

    document.getElementById("logout").addEventListener("click", function() {
        signOut(auth).then(() => {
            window.location.href = "/index.html"; 
        }).catch((error) => {
            console.error("Error during sign-out:", error);
        });
    });
});











// Pre loader
window.addEventListener('load', function() {
   
    setTimeout(function() {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); 
    }, 200); 
});