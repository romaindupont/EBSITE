import { connect } from 'react-redux';
// == Import : local
import Header from '../../components/Header';

const mapStateToProps = (state) => ({
 count: state.articles.count
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header);