import { connect } from 'react-redux';
// == Import : local
import Panier from '../../components/Panier';
import { saveArticleId, dustArticle } from '../../actions/articles';

const mapStateToProps = (state) => ({
 panier: state.articles.panier,
 id: state.articles.id,
 count: state.articles.count
});

const mapDispatchToProps = (dispatch)=> ({
  saveArticleId: (id) => {
    dispatch(saveArticleId(id));
  },
  dustArticle: (id, quantity) => {
    dispatch(dustArticle(id, quantity));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Panier);