import { connect } from 'react-redux';
// == Import : local
import Category from '../../components/Category';
import {changeCategoryField} from '../../actions/category';

const mapStateToProps = (state) => ({
 DataCategory: state.category.categoryList,
 categoryNames: state.category.categoryName,
 list: state.category.list,
});

const mapDispatchToProps = (dispatch)=> ({
  changeCategoryField: (newValue, name) => {
    dispatch(changeCategoryField(newValue, name));
  },
  

});

export default connect(mapStateToProps, mapDispatchToProps)(Category);