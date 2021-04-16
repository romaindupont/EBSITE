import { connect } from 'react-redux';
import {changeCategoryField} from '../../actions/category';
// == Import : local
import SearchBar from '../../components/SearchBar';

const mapStateToProps = (state) => ({
  categoryName: state.category.categoryName,
  
});

const mapDispatchToProps = (dispatch)=> ({
  changeCategoryField: (newValue, name) => {
    dispatch(changeCategoryField(newValue, name));
  },
  

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);