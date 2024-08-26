document.addEventListener('DOMContentLoaded', function() {

    // Function to validate inputs and add classes
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

    // Function to validate all required inputs
    function validateAllRequiredInputs() {
        var fullNameValid = validateInput(document.getElementById('fullName'));
        var birthdayValid = validateInput(document.getElementById('birthday'));
        var phoneValid = validateInput(document.getElementById('phone'));

        return fullNameValid && birthdayValid && phoneValid;
    }

    // Event listener for the toggle image click
    document.getElementById('toggleImage').addEventListener('click', function() {
        var panel = document.getElementById('panel');
        var settings = document.getElementById('settings');
        var dynamicName = document.getElementById('dynamic-name');
        var footer = document.getElementById('footer');

        if (!panel.classList.contains('none')) {
            // Show settings, hide panel
            panel.classList.add('none');
            footer.classList.add('none');
            settings.classList.remove('none');
            dynamicName.textContent = 'Settings'; 
        } else {
            if (!validateAllRequiredInputs()) {
                alert('Please fill out all required fields.');
            } else {
                // Show panel, hide settings
                panel.classList.remove('none');
                footer.classList.remove('none');
                settings.classList.add('none');
                dynamicName.textContent = document.getElementById('fullName').value.trim();
            }
        }
    });

    // Real-time validation for Full Name, Date of Birth, and Phone Number
    document.getElementById('fullName').addEventListener('input', function() {
        validateInput(this);
    });

    document.getElementById('birthday').addEventListener('input', function() {
        validateInput(this);
    });

    document.getElementById('profilePicture').addEventListener('change', function(event) {
        const profileImg = document.querySelector('.profile-img');
        const file = event.target.files[0]; 
        if (file) {
            const reader = new FileReader(); 
            reader.onload = function(e) {
                profileImg.src = e.target.result; 
            }
            reader.readAsDataURL(file); 
        }
    });

    document.getElementById('save-changes').addEventListener('click', function(event) {
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

            var panel = document.getElementById('panel');
            var settings = document.getElementById('settings');
            var footer = document.getElementById('footer');

            panel.classList.remove('none');
            footer.classList.remove('none');
            settings.classList.add('none');
        } else {
            console.log('Changes were not saved.');
        }
    });
});



//PhoneNumber
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
    window.location.href = "/index.html";
});
