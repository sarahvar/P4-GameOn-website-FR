function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close"); // ajout de la gestion du X pour fermer la modale
const formData = document.querySelectorAll(".formData");

// lance l'événement bouton de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalCloseBtn.addEventListener("click", closeNav);
//// lance le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}
// Fermeture de la nav
function closeNav() {
  modalbg.style.display = "none";
}
const close = document.querySelectorAll("#close");
close.forEach((closed) => closed.addEventListener("click", closeModal));

// Fermeture de la modale
function closeModal() {
  modalSuccess.style.display = "none";
  location.reload();
}
// Modale de validation
function modalValidation() {
  const modalSuccess = document.querySelector("#modalSuccess");
  modalSuccess.style.display = "block";
  modalbg.style.display = "none";
}
// Function générique pour génèrer les erreurs
function error(message) {
  return message;
}

//Test du champs firstname (prénoms)
function firstnameValidation() {
  let firstName = document.querySelector("#first").value;
  const firstnameError = document.getElementById("firstNameErrorMsg");
  if (firstName === "") {
    firstnameError.innerText = error ("Champs obligatoire ");
    firstnameError.style.color = "red";
    firstnameError.style.fontSize = "12px"
    return false;
  } else if (firstName.trim().length < 2) {
    firstnameError.innerText = error("Veuillez entrer 2 caractères ou plus");
    firstnameError.style.color = "red";
    firstnameError.style.fontSize = "12px";

    return false;
  } else {
    firstnameError.innerText = error("");
    return true;
  }
}

//Test du champs lastname (nom de famille)
function lastnameValidation() {
  let lastName = document.querySelector("#last").value;
  const lastnameError = document.getElementById("lastNameErrorMsg");
  if (lastName === "") {
    lastnameError.innerText = error ("Champs obligatoire ");
    lastnameError.style.color = "red";
    lastnameError.style.fontSize = "12px"
    return false;
  } else if (lastName.trim().length < 2) {
    lastnameError.innerText = error("Veuillez entrer 2 caractères ou plus");
    lastnameError.style.color = "red";
    lastnameError.style.fontSize = "12px";

    return false;
  } else {
    lastnameError.innerText = error("");
    return true;
  }
}
//Test du champs email
function emailValidation() {
  let email = document.querySelector("#email").value;
  let regexEmail = /.+\@.+\..+/;
  const emailError = document.getElementById("emailErrorMsg");
  if (email === "") {
    emailError.innerText = error("Champs obligatoire ");
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";

    return false;
  } else if (regexEmail.test(email) === false) {
    emailError.innerText = error("Merci d'inscrire une adresse mail correcte");
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    return false;
  } else {
    emailError.innerText = error("");
    return true;
  }
}

//Test du champs birthdate (date de naissance)
function birthdateValidation() {
  let birthCheckValue = document.querySelector("#birthdate").value;
  const birthdateError = document.getElementById("birthdateErrorMsg");
  const minimumAge = 12;
  const today = new Date();
  const birthDate = new Date(birthCheckValue);
  let ageInYears = today.getFullYear() - birthDate.getFullYear();

  ageInYears =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? ageInYears - 1
      : ageInYears;

  let errorMessage = "";

  if (birthCheckValue === "") {
    errorMessage = "Merci de renseigner une date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "12px";
  } else if (ageInYears < minimumAge) {
    errorMessage = "Désolé(e), l'âge minimum requis est de 12 ans";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "12px";
  }

  birthdateError.innerText = errorMessage;
  birthdateError.innerHTML = errorMessage;

  // Renvoie vrai si aucun message d'erreur n'est défini, ou faux s'il y en a un
  return errorMessage === "";
}

//Test du champs quantity (quantité de tournois)
function quantityTournamentsValidation() {
  let quantity = document.querySelector("#quantity").value;
  const quantityTournamentsError = document.getElementById(
    "quantityTournamentsErrorMsg"
  );
  const quantityValid = quantity >= 0 && quantity <= 99 && quantity !== "";

  quantityTournamentsError.innerHTML = quantityValid
    ? ""
    : "Merci de renseigner un nombre compris entre 0 et 99";

  quantityTournamentsError.style.color = "red";
  quantityTournamentsError.style.fontSize = "12px";

  if (quantityValid) {
    //Valider le champs
    return true;
  } else {
    // Empêcher la validation du champs
    return false;
  }
}
//Test si une case du choix d'une ville a bien été cocher
function locationsValidation() {
  let locations = document.querySelector("#locationsErrorMsg");
  const locationsError = document.getElementById("locationsErrorMsg");
  const locationsCheck = document.querySelector(
    'input[name="location"]:checked'
  );
  if (!locationsCheck) {
    locations.innerHTML = "Merci de choisir une ville";
    locationsError.style.color = "red";
    locationsError.style.fontSize = "12px";
    return false;
  } else {
    location.innerHTML = "";
    return true;
  }
}

function acceptedConditionsValidation() {
  const checkbox1 = document.querySelector("#checkbox1");
  const acceptedError = document.querySelector("#acceptedErrorMsg");
  if (checkbox1.checked === false) {
    acceptedError.innerText = error(
      "Merci de lire et d'accepter les conditions d'utilisation"
    );
    acceptedError.style.color = "red";
    acceptedError.style.fontSize = "12px";
    return false;
  } else {
    acceptedError.innerText = error("");
    acceptedError.style.color = "red";
    acceptedError.style.fontSize = "12px";
    return true;
  }
}
//Fonction qui vérifie que tous les champs du formulaire sont true en verifiant la valeur retournée par chaque foncction
function checkValidateAll() {
  firstnameValidation();
  lastnameValidation();
  emailValidation();
  birthdateValidation();
  quantityTournamentsValidation();
  locationsValidation();
  acceptedConditionsValidation();
}
function validate() {
  if (
    firstnameValidation() &&
    lastnameValidation() &&
    emailValidation() &&
    birthdateValidation() &&
    quantityTournamentsValidation() &&
    locationsValidation() &&
    acceptedConditionsValidation()
  ) {
    return true;
  }
  return false;
}

//Event au click submit pour permettre de valider le formulaire si tout est true
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()) {
    modalValidation();
  } else {
    checkValidateAll();
  }
});
