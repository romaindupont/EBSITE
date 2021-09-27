import { connect } from 'react-redux';
// == Import : local
import ListFacture from '../../components/ListFacture';
import { orderNumberSelect } from '../../actions/order';
const mapStateToProps = (state) => ({
  orderList: state.order.orderList,
  articlesList: state.articles.articlesList,
  userInfo: state.user.userInfo
 });

 const mapDispatchToProps = (dispatch)=> ({
  orderNumberSelect: (orderNumber) => {
    dispatch(orderNumberSelect(orderNumber));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFacture);