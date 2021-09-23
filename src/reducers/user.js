import { LOGIN, CHANGE_VALUE, CHANGE_USER_PASSWORD, CHANGE_USER_INFOS } from "../actions/user";

const initialState = {
  userList: [
    {
      id: 1,
      email: 'romain@romain.com',
      password: 'Romain123#',
      surname: "rom",
      name: 'Ain',
      adresse: '22 avenue d\'ici',
      cp: 14000,
      tel: '0233404122',
      ville: 'CAEN'
    },
    {
      id: 2,
      email: 'joe@joe.com',
      password: 'Joe1234#',
      surname: "Joe",
      name: '1234',
      adresse: '154 route de làs bas',
      cp: 50700,
      tel: '0702913538',
      ville: 'VALOGNES'
    },
    {
      id: 3,
      email: 'maurice@maurice.com',
      password: 'Maurice123#',
      surname: "Maurice",
      name: 'Rice',
      adresse: '12 route du chemin',
      cp: 75000,
      tel: '0629974515',
      ville: 'PARIS'
    }
  ],
  userName:'',
  password:'',
  userInfo: [],
  isConnected: false,
  surname: '',
  name: '',
  adresse: '',
  cp: null,
  tel: '',
  email: '',
  id: null,
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isConnected: true,
        userInfo: state.userList.find((user) => user.email === action.email & user.password === action.password)
      }
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case CHANGE_USER_PASSWORD:
      return {
        ...state,
        userList: state.userList.map(user => {
          if (user.id === action.id) {
            return {
              password: action.password,
            }
          }
          else {
            return user;
          }
        }),
      }
    case CHANGE_USER_INFOS:
      return {
        ...state,
        userList: state.userList.map(user => {
          if (user.id === action.id) {
            return {
              email: action.email,
              password: action.password,
              surname: action.surname,
              name:action.name,
              adresse: action.adresse,
              cp: action.cp,
              tel: action.tel,
              ville: action.ville
            }
          }
          else {
            return user;
          }
        }),
      }
    default:
      return state;
  }
};

export default reducer;