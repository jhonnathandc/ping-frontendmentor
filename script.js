const buttonSubmit = document.querySelector(".btn");

function handleClick(e) {
  e.preventDefault();
  const input = document.getElementById("email");
  const form = document.querySelector(".form");
  const info = document.querySelector(".info");

  if (form.classList.contains("email-accept")) {
    form.classList.remove("email-accept");
  } else if (form.classList.contains("email-error")) {
    form.classList.remove("email-remove");
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const emailToValidade = input.value;

  if (validateEmail(emailToValidade)) {
    form.classList.add("email-accept");
    info.innerText = "Perfect, valid email address";
  } else {
    form.classList.add("email-error");
    info.innerText = "Please provide a valid email address";
  }
}

buttonSubmit.addEventListener("click", handleClick);
