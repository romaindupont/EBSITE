import { connect } from 'react-redux';
// == Import : local
import Navbar from '../../components/Menu/Navbar';

const mapStateToProps = (state) => ({
 isConnected: state.user.isConnected
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);