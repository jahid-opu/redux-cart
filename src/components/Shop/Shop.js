import React from "react";
import { connect } from "react-redux";
import Product from "../Product/Product";
import { addToCART } from "../redux/actions/cartActions";

const Shop = () => {
  const products = [
    { name: "Lenovo laptop", id: 1 },
    { name: "Asus laptop", id: 2 },
    { name: "Dell laptop", id: 3 },
    { name: "Hp laptop", id: 4 },
    { name: "Toshiba laptop", id: 5 },
  ];
  return (
    <div>
      <h3>This is Shop</h3>
      {products.map((pd) => (
        <Product product={pd} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCART,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
