const LS_KEY_FORM = "feedback-form-state";
const formData = {
  email: "",
  message: "",
};

const formElement = document.querySelector(".feedback-form");
const emailInput = formElement.querySelector('[name="email"]');
const messageInput = formElement.querySelector('[name="message"]');

const localState = JSON.parse(localStorage.getItem(LS_KEY_FORM));

function restoreFormData() {
  if (localState) {
    formData.email = localState.email;
    formData.message = localState.message;
    emailInput.value = localState.email;
    messageInput.value = localState.message;
  }
}

restoreFormData();

formElement.addEventListener("input", handleInput);
formElement.addEventListener("submit", handleSubmit);


function handleInput(event) {
  if (event.target.name === "email") {
    formData.email = event.target.value;
  } else if (event.target.name === "message") {
    formData.message = event.target.value;
  }

  localStorage.setItem(LS_KEY_FORM, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  clearFormData();
}

function clearFormData() {
  localStorage.removeItem(LS_KEY_FORM);
  formElement.reset();
  formData.email = "";
  formData.message = "";
}


