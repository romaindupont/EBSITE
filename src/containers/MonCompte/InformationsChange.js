import { connect } from 'react-redux';
// == Import : local
import InformationsChange from '../../components/MonCompte/InformationsChange';
import { changeUserInfos } from '../../actions/user';

const mapStateToProps = (state) => ({
 userInfo: state.user.userInfo
});

const mapDispatchToProps = (dispatch)=> ({
  changeUserInfos: (email, name, surname, adresse, cp, tel, ville) => {
    dispatch(changeUserInfos(email, name, surname, adresse, cp, tel, ville));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InformationsChange);