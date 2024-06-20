const form = document.getElementById("user-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); //To Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  form.reset();
});
