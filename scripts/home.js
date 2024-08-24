document.addEventListener('DOMContentLoaded', function() {
 
  document.getElementById('toggleImage').addEventListener('click', function() {
      var panel = document.getElementById('panel');
      var settings = document.getElementById('settings');
      var dynamicName = document.getElementById('dynamic-name');
      var footer = document.getElementById('footer');
      var fullNameInput = document.getElementById('fullName');

      
      var fullName = fullNameInput.value;

      if (panel.classList.contains('none')) {
          panel.classList.remove('none');
          footer.classList.remove('none');
          settings.classList.add('none');
          dynamicName.textContent = fullName; 
      } else {
          panel.classList.add('none');
          footer.classList.add('none');
          settings.classList.remove('none');
          dynamicName.textContent = 'Settings'; 
      }
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

    
      const userConfirmed = confirm("Are you sure you want to save changes?");

      if (userConfirmed) { 
          
          const profileImgSrc = document.querySelector('.profile-img').src; 
          const toggleImage = document.getElementById('toggleImage');
          if (toggleImage) { 
              toggleImage.src = profileImgSrc; 
          } else {
              console.error('Toggle image element not found');
          }

          const fullName = document.getElementById('fullName').value; 
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

    if (value.length === 9) {
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