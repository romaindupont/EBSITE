import { connect } from 'react-redux';
// == Import : local
import Connexion from '../../components/Connexion';
import { changeValue, login } from '../../actions/user';

const mapStateToProps = null/* (state) => ({
  
}); */

const mapDispatchToProps = (dispatch)=> ({
  changeValue: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  },
  login: (email, password) => {
    dispatch(login(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);