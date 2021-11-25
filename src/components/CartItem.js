import React from "react";
import { connect } from "react-redux";
import products from "../products.json";
import addItem from "../redux/actions/addItem";
import removeItem from "../redux/actions/removeItem";
import incrementItem from "../redux/actions/incrementItem";
import decrementItem from "../redux/actions/decrementItem";
import searchArray from "../utils/searchArray";

function CartItem({ cartItem, removeItem, incrementItem, decrementItem }) {
  const [productDetail] = searchArray(products, "id", cartItem.id);
  return (
    <div className="rounded-md border-2 border-yellow-500 p-5 mb-2">
      <p className="text-lg mb-2 font-bold font-heading">
        {productDetail.name}
        <span className="ml-3 font-normal">({cartItem.quantity})</span>
      </p>
      <p className="mb-2">
        USD {searchArray(cartItem.prices, "currency", "USD")[0].amount}
      </p>
      <div class="flex flex-col">
        {cartItem.attributes.map((attributeItem) => (
          <p class="mr-4">
            {attributeItem.name}:{" "}
            <span class="font-bold">{attributeItem.value}</span>
          </p>
        ))}
      </div>
      <button
        className="px-2 py-1 mt-4 mr-2 bg-purple-200 hover:bg-purple-500 text-black rounded-lg"
        onClick={() => incrementItem(cartItem.cartId)}
      >
        +
      </button>
      <button
        className="px-2 py-1 mt-4 mr-2 bg-purple-200 hover:bg-purple-500 text-black rounded-lg"
        onClick={() => decrementItem(cartItem.cartId)}
      >
        -
      </button>
      <button
        className="px-2 py-1 mt-4 mr-2 bg-red-200 hover:bg-red-500 text-black rounded-lg"
        onClick={() => removeItem(cartItem.cartId)}
      >
        Remove
      </button>
    </div>
  );
}

export default connect(
  ({ cart }) => ({
    cart: cart,
  }),
  { addItem, removeItem, incrementItem, decrementItem }
)(CartItem);
