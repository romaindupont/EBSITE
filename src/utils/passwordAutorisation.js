export function passwordAutorisation (myValue) {
  const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (regexPassword.test(myValue))
  {
    return true
  }
    else {
     return false
    }
};
