export function inputTest (myValue, targetName) {
  const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regexCp = /^\d{5}/;
  if (targetName === "password" || targetName === "password_confirmation")
  {
    const psdId = document.getElementById(targetName);
    /* const psdError = document.getElementById('errorPassword'); */
    if (regexPassword.test(myValue)) {
      psdId.style.color="green";
      /* psdError.textContent="Mot de passe valide"; */
    }
    else {
      psdId.style.color="red"
      /* psdError.textContent="Mot de passe invalide"; */
    }
  }
  if (targetName === "cp")
  {
    const cpId = document.getElementById(targetName);
    /* const psdError = document.getElementById('errorPassword'); */
    if (regexCp.test(myValue)) {
      cpId.style.color="black";
      /* psdError.textContent="Mot de passe valide"; */
    }
    else {
      cpId.style.color="red"
      /* psdError.textContent="Mot de passe invalide"; */
    }
  }
};
