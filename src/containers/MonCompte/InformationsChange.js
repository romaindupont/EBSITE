import { connect } from 'react-redux';
// == Import : local
import InformationsChange from '../../components/MonCompte/InformationsChange';


const mapStateToProps = (state) => ({
 userInfo: state.user.userInfo
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(InformationsChange);