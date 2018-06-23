import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductShow from './product_show';

const mapStateToProps = state => {
  let { products } = state;

  return { products };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);