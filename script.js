var slideshowContainers = document.getElementsByClassName("slideshow");

for (var i = 0; i < slideshowContainers.length; i++) {
  var slideshowImages = slideshowContainers[i].getElementsByTagName("img");
  var currentIndex = 0;
  slideshowImages[currentIndex].style.opacity = 1;

  setInterval(function(slideshowImages, currentIndex) {
    return function() {
      slideshowImages[currentIndex].style.opacity = 0;
      currentIndex = (currentIndex + 1) % slideshowImages.length;
      slideshowImages[currentIndex].style.opacity = 1;
    };
  }(slideshowImages, currentIndex), 5000); // Adjust the duration (in milliseconds) between slides as needed
}


// JavaScript code to validate phone number input
document.getElementById('contact-input').addEventListener('input', function (event) {
  var phoneNumber = event.target.value;
  // Remove all non-numeric characters from the input value
  phoneNumber = phoneNumber.replace(/\D/g, '');
  // Restrict input to 10 digits
  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.slice(0, 10);
  }
  // Format the phone number with hyphens in Indian format
  if (phoneNumber.length >= 4) {
    phoneNumber = phoneNumber.slice(0, 4) + '-' + phoneNumber.slice(4);
  }
  if (phoneNumber.length >= 8) {
    phoneNumber = phoneNumber.slice(0, 8) + '-' + phoneNumber.slice(8);
  }
  // Set the input value to the formatted phone number
  event.target.value = phoneNumber;
});








