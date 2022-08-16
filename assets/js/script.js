function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "hunterbrennan15@gmail.com",
    Password: "password",
    To: 'hunterbrennan15@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))