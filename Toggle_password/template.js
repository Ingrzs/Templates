document
  .querySelector(".button-toggle")
  .addEventListener("click", toggleInputType);

function toggleInputType() {
  const inputElement = document.querySelector(".input-toggle");

  inputElement.type = inputElement.type === "text" ? "password" : "text";


  const showIcon = document
    .querySelector(".show-icon")
    .classList.toggle("hidden");
  const hideIcon = document
    .querySelector(".hide-icon")
    .classList.toggle("show");
}





/*
  /*if (input.type === "password") {
  input.type = "text";
} else {
  input.type = "password";
}
 function toggleInputType() {
  const inputElement = document.querySelector(".input-toggle");
  inputElement.type = inputElement.type === "text" ? "password" : "text";

  const showIcon = document.querySelector(".show-icon").classList.toggle("hidden");
  const hideIcon = document.querySelector(".hide-icon").classList.toggle("show");
  
}

document.querySelector(".button-toggle").addEventListener("click", toggleInputType);



  */
