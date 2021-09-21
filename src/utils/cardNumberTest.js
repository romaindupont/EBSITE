export function CardNumberTest (myValue) {
  const regex = /^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([-\s]?)\d{4}\1\d{4}\1\d{3,4}$/;
  /* ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$ */
  const inputCard = document.getElementById('inputCard');
  /* const psdError = document.getElementById('errorPassword'); */
  if (regex.test(myValue)) {
    inputCard.style.color="rgb(228, 222, 222)";
   /*  psdError.textContent="Mot de passe valide"; */
  }
  else {
    inputCard.style.color="red"
    /* psdError.textContent="Mot de passe invalide"; */
  }
};