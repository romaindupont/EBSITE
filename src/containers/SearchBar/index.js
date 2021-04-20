import { connect } from 'react-redux';
// == Import : local
import SearchBar from '../../components/SearchBar';

const mapStateToProps = (state) => ({
  categoryName: state.category.categoryName,
  
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);