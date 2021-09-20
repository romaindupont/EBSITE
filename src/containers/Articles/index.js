import { connect } from 'react-redux';
import {changeArticlesField} from '../../actions/articles';
// == Import : local
import Articles from '../../components/Articles';
import { sendArticleToBasket } from '../../actions/order';

const mapStateToProps = (state) => ({
  articleData: state.articles.articlesList,
  articlesNames: state.articles.articlesName,
  listArticles: state.articles.listArticles,
  panier: state.articles.panier,
});

const mapDispatchToProps = (dispatch)=> ({
  changeArticlesField: (newValue, name) => {
    dispatch(changeArticlesField(newValue, name));
  },
  sendArticleToBasket: (article_id, quantity) => {
    dispatch(sendArticleToBasket(article_id, quantity));
  }
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);