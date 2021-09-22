import { connect } from 'react-redux';
// == Import : local
import Payment from '../../components/Panier/Payment';


const mapStateToProps = (state) => ({
 isConnected : state.user.isConnected
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);