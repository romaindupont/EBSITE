import { connect } from 'react-redux';
import {changeArticlesField} from '../../actions/articles';
// == Import : local
import Articles from '../../components/Articles';

const mapStateToProps = (state) => ({
  articleData: state.articles.articlesList,
  articlesNames: state.articles.articlesName,
  listArticles: state.articles.listArticles,
});

const mapDispatchToProps = (dispatch)=> ({
  changeArticlesField: (newValue, name) => {
    dispatch(changeArticlesField(newValue, name));
  },
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);