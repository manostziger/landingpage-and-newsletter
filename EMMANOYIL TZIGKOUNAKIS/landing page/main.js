
function validateForm() {
   
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

  
    if (name.trim() === "") {
        alert("Name is required.");
        return false; 
    }

   
    if (!/^\d{10,}$/.test(phone)) {
        alert("Phone number is invalid. It should be numeric and at least 10 digits.");
        return false;
    }

    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Email is invalid. Please enter a valid email address.");
        return false;
    }

   
    if (message.trim().length < 10) {
        alert("Message should be at least 10 characters long.");
        return false;
    }


}
