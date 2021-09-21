import { connect } from 'react-redux';
// == Import : local
import Container from '../../components/Panier/Container';
import { plusArticle, minusArticle } from '../../actions/articles';

const mapStateToProps = null/* (state) => ({
  
}); */

const mapDispatchToProps = (dispatch)=> ({
  plusArticle: (id, quantity) => {
    dispatch(plusArticle(id, quantity));
  },
  minusArticle: (id, quantity) => {
    dispatch(minusArticle(id, quantity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);