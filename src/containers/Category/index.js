import { connect } from 'react-redux';
import {searchCategory} from '../../actions/category';
// == Import : local
import Category from '../../components/Category';

const mapStateToProps = (state) => ({
 DataCategory: state.category.categoryList,
 categoryNames: state.category.categoryName,
 list: state.category.list,
});

const mapDispatchToProps = (dispatch)=> ({
  searchCategory:(list) => {
    dispatch(searchCategory(list));
  },
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Category);