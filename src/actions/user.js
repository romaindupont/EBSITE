export const LOGIN = 'LOGIN';
export const login = (email,password) => ({
  type: LOGIN,
  email,
  password
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, key) => ({
  type: CHANGE_VALUE,
  newValue,
  key,
});

export const NEW_USER = 'NEW_USER';
export const newUser = (email, name, surname, adresse, cp, tel) => ({
  type: NEW_USER,
  email,
  name,
  surname,
  adresse,
  cp,
  tel
});

export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD';
export const changeUserPassword = (id, password) => ({
  type: CHANGE_USER_PASSWORD,
  id,
  password
});

export const CHANGE_USER_INFOS = 'CHANGE_USER_INFOS';
export const changeUserInfos = (email, name, surname, adresse, cp, tel, ville) => ({
  type: CHANGE_USER_INFOS,
  email,
  name,
  surname,
  adresse,
  cp,
  tel,
  ville
});