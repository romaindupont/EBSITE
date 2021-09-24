import { connect } from 'react-redux';
// == Import : local
import BlueCard from '../../components/Panier/BlueCard';
import { ordering } from '../../actions/order';

const mapStateToProps = (state) => ({
  numeroCde: state.order.numeroCde,
  panier: state.articles.panier,
  userInfo: state.user.userInfo,
  orderList: state.order.orderList
});

const mapDispatchToProps = (dispatch)=> ({
  ordering: (orderNumber, orderList, date, user_id, infoCde, dateLivraison, totalAmount) => {
    dispatch(ordering(orderNumber, orderList, date, user_id, infoCde, dateLivraison, totalAmount));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlueCard);