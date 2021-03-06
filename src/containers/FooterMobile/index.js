import { connect } from 'react-redux';
// == Import : local
import Footer from '../../components/Articles/footer';

const mapStateToProps = (state) => ({
 count: state.articles.count,
 isConnected: state.user.isConnected
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);