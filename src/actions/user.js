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