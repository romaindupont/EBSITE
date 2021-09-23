import { connect } from 'react-redux';
// == Import : local
import Field from '../../components/MonCompte/Field';
import { changeValue } from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.user[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);