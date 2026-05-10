
document.addEventListener("DOMContentLoaded", () => {
  
  //existing Fade-in code
  document.body.classList.add("fade-in");

  // The Typewriter Effect 
  const textElement = document.getElementById("typedText");
  
 
  const textToType = "Compiling Portfolio..."; 
  
  let index = 0;
  
  function typeWriter() {
    if (index < textToType.length) {
      textElement.innerHTML += textToType.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Speed: 100ms per letter
    }
  }

  // Start typing after a small delay (so the page fades in first)
  setTimeout(typeWriter, 1000); 
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stops form from reloading page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    // Name check
    if (name.length < 2) {
        status.style.color = "red";
        status.textContent = "Please enter a valid name.";
        return;
    }

    // Email check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        status.style.color = "red";
        status.textContent = "Please enter a valid email.";
        return;
    }

    // Message check
    if (message.length < 10) {
        status.style.color = "red";
        status.textContent = "Message should be at least 10 characters.";
        return;
    }

    // Success
    status.style.color = "#00ff00";
    status.textContent = "Message sent successfully!";
});
