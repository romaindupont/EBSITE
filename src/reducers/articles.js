import {CHANGE_ARTICLES_FIELD, SAVE_ARTICLE_ID, DUST_ARTICLE, PLUS_ARTICLE, MINUS_ARTICLE} from '../actions/articles';
import { SEND_ARTICLE_TO_BASKET } from "../actions/order";

const initialState = {
  articlesList : [
    {
      id:1,
      category:"Jouet",
      picture:"https://i.imgur.com/1giD6lu.png",
      picture1:"https://i.imgur.com/Gg1gSiC.png",
      picture2:"https://i.imgur.com/FtElrCu.png",
      title: "Loup",
      description:"Loup",
      descriptionPlus:"Bois de hêtre pour plus de confort et prise en main facile",
      dimension:"20x20cm",
      prix:20.90,
  
    },
    {
      id:2,
      category:"Decoration",
      picture:"https://i.imgur.com/Gg1gSiC.png",
      picture1:"https://i.imgur.com/FtElrCu.png",
      picture2:"https://i.imgur.com/Gg1gSiC.png",
      title: "Arc en ciel",
      description:"Arc en ciel dépliable",
      descriptionPlus:"Dépliable pour s'adapter à vos envie",
      dimension:"50x10cm",
      prix:40.90,
    },
    {
      id:3,
      category:"Bebe",
      picture:"https://i.imgur.com/Gg1gSiC.png",
      picture1:"https://i.imgur.com/1giD6lu.png",
      picture2:"https://i.imgur.com/FtElrCu.png",
      title: "Hochet",
      description:"Jolie petit hochet",
      descriptionPlus:"Bois de hêtre pour plus de confort et prise en main facile",
      dimension:"10x10cm",
      prix:30.90,
    },
    {
      id:4,
      category:"Vehicules",
      picture:"https://i.imgur.com/FtElrCu.png",
      picture1:"https://i.imgur.com/Gg1gSiC.png",
      picture2:"https://i.imgur.com/1giD6lu.png",
      title: "Voiture Dino",
      description:"Voiture tirable",
      descriptionPlus:"En pin, le tire dino est fourni avec la ficelle pour le tirer",
      dimension:"100x10cm",
      prix:50.90,
    },
],
  articlesName: '',
  listArticles: [],
  panier: [
  ],
  id:'',
  count: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ARTICLES_FIELD:
      return {
        ...state,
      [action.key]: action.newValue,
      listArticles: state.articlesList.filter((article)=> article.title.toLowerCase().replace(/é|è|ê/g,"e").includes(action.newValue)),
      }
    case SEND_ARTICLE_TO_BASKET:
      const newArticleInBasket = state.articlesList.find(article => article.id === action.article_id );
      let jsonArticle = {
        'id': newArticleInBasket.id,
        'title': newArticleInBasket.title,
        'quantity': action.quantity,
        'price': newArticleInBasket.prix,
        'category': newArticleInBasket.category,
        'picture':newArticleInBasket.picture,
        'amount': newArticleInBasket.prix*action.quantity
      }
      return {
        ...state,
        panier: [
          ...state.panier,
          jsonArticle
        ],
        count: state.count+action.quantity
      }
      case SAVE_ARTICLE_ID:
        return {
          ...state,
          id: action.id
        }
      case DUST_ARTICLE:
        return {
          ...state,
          panier: state.panier.filter((item) => { return action.id !== item.id }),
          count: state.count-action.quantity
        }
      case PLUS_ARTICLE:
        return {
          ...state,
          panier: state.panier.map(article => {
            if(article.id === action.id) {
              return {
                id: article.id,
                title: article.title,
                quantity: article.quantity+action.quantity,
                price: article.price,
                category: article.category,
                picture: article.picture,
                amount: article.price*(article.quantity+action.quantity)
              }
            }
            else {
              return article;
            }
          }),
          count: state.count+1
        }
        case MINUS_ARTICLE:
          return {
            ...state,
            panier: state.panier.map(article => {
              if(article.id === action.id) {
                return {
                  id: article.id,
                  title: article.title,
                  quantity: article.quantity-action.quantity,
                  price: article.price,
                  category: article.category,
                  picture: article.picture,
                  amount: article.price*(article.quantity-action.quantity)
                }
              }
              else {
                return article;
              }
            }),
            count: state.count-1
          }
    default:
      return state;
  }
};

export default reducer;