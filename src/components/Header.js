import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Header({ cart }) {
  return (
    <header class="text-center">
      <h1 class="text-3xl mb-2 font-bold">ShopBux</h1>
      <div class="flex flex-row items-center justify-center">
        <NavLink
          className="mx-3 text-indigo-300"
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="mx-3 text-indigo-300"
          to="/cart"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Cart {cart.length > 0 ? `(${cart.length})` : ""}
        </NavLink>
      </div>
    </header>
  );
}

export default connect(
  ({ cart }) => ({
    cart: cart,
  }),
  null
)(Header);
