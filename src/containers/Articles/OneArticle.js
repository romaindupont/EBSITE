import { connect } from 'react-redux';
// == Import : local
import OneArticle from '../../components/Articles/OneArticle';
import { sendArticleToBasket } from '../../actions/order';

const mapStateToProps = null/* (state) => ({
  
}); */

const mapDispatchToProps = (dispatch)=> ({
  sendArticleToBasket: (article_id, quantity) => {
    dispatch(sendArticleToBasket(article_id, quantity));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OneArticle);