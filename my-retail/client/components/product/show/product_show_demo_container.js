import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import ProductShow from './product_show';

const mapStateToProps = ({ products }) => {
  let product = Object.keys(products).map(id => products[id])[0];

  return { product };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);