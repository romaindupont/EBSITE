import { connect } from 'react-redux';
// == Import : local
import PasswordModification from '../../components/MonCompte/PasswordModification';
import { changeUserPassword } from '../../actions/user';

const mapStateToProps = (state) => ({
  id: state.user.id
});

const mapDispatchToProps = (dispatch)=> ({
  changeUserPassword: (id, password) => {
    dispatch(changeUserPassword(id, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordModification);