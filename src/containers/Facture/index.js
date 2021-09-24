import { connect } from 'react-redux';
// == Import : local
import Facture from '../../components/Facture';

const mapStateToProps = (state) => ({
  orderList: state.order.orderList,
  numeroCde: state.order.numeroCde
 });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Facture);