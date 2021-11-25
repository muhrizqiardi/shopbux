import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import CartItem from "../components/CartItem";

function Cart({ cart }) {
  return (
    <>
      <Header />
      <main className="flex flex-col py-5">
        {cart.length > 0 ? (
          cart.map((cartItem) => <CartItem cartItem={cartItem} />)
        ) : (
          <>
            <div className="p-5 mb-2 flex items-center justify-center text-gray-400">
              Your cart is empty.
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(
  ({ cart }) => ({
    cart: cart,
  }),
  null
)(Cart);
