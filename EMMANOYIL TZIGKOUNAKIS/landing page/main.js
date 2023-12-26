/*
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("photos-container");
    const imageCollection = [
        "images/image1.svg",
        "images/image2.svg",
        "images/image3.svg",
        "images/image4.svg",
        "images/image5.svg",
        "images/image6.svg",
        "images/image7.svg"
    ];

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const backgroundImageWidth = 200;
    const backgroundImageHeight = 200;

    const numImagesX = Math.ceil(screenWidth / backgroundImageWidth);
    const numImagesY = Math.ceil(screenHeight / backgroundImageHeight);

    for (let y = 0; y < numImagesY; y++) {
        for (let x = 0; x < numImagesX; x++) {
            const image = document.createElement("div");
            image.classList.add("background-image");

            const posX = x * backgroundImageWidth;
            const posY = y * backgroundImageHeight;

            image.style.left = `${posX}px`;
            image.style.top = `${posY}px`;

            const randomImageIndex = Math.floor(Math.random() * imageCollection.length);
            const randomImageUrl = imageCollection[randomImageIndex];
            image.style.backgroundImage = `url("${randomImageUrl}")`;

            container.appendChild(image);
        }
    }
});
*/

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