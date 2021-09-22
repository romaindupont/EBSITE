import { connect } from 'react-redux';
// == Import : local
import Field from '../../components/Register/Field';
import { changeValue } from '../../actions/user';

const mapStateToProps = null/* (state) => ({
  
}); */

const mapDispatchToProps = (dispatch)=> ({
  changeValue: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);