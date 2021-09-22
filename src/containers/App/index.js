import { connect } from 'react-redux';
// == Import : local
import App from '../../components/App';

const mapStateToProps = (state) => ({
 isConnected: state.user.isConnected
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App);