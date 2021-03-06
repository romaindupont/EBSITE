import {FETCH_CATEGORY,CHANGE_CATEGORY_FIELD} from '../actions/category';

const initialState = {
  categoryList : [
    {
      id:1,
      name:"Jouet",
      picture:"https://i.imgur.com/1giD6lu.png",
      slug:"jouet",
    },
    {
      id:2,
      name:"Décoration",
      picture:"https://i.imgur.com/Gg1gSiC.png",
      slug:"decoration",
    },
    {
      id:3,
      name:"Bébé",
      picture:"https://i.imgur.com/Gg1gSiC.png",
      slug:"bebe",
    },
    {
      id:4,
      name:"Véhicules",
      picture:"https://i.imgur.com/FtElrCu.png",
      slug:"vehicules",
    },
    {
      id:5,
      name:"All",
      picture:"https://i.imgur.com/Gg1gSiC.png",
      slug:"all",
    },
],
  categoryName: '',
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categoryList: action.categoryList,
      }
  case CHANGE_CATEGORY_FIELD:
    return {
      ...state,
      [action.key]: action.newValue,  
      list:state.categoryList.filter((category)=> category.name.toLowerCase().replace(/é|è|ê/g,"e").includes(action.newValue)),    
    }
    default:
      return state;
  }
};

export default reducer;