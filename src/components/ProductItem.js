import React, { useEffect } from "react";
import { connect } from "react-redux";
import kebabCase from "../utils/kebabCase";
import addItem from "../redux/actions/addItem";

function ProductItem({ product, addItem, cart }) {
  useEffect(() => {
    // console.log(cart);
  }, [cart]);
  return (
    <form
      id={kebabCase(`${product.name} attributes`)}
      class="rounded-md border-2 border-purple-500 p-5 mb-2"
      onSubmit={(e) => {
        e.preventDefault();
        const newItem = {
          id: product.id,
          prices: product.prices,
          quantity: 1,
          attributes: [],
        };
        for (const attribute of product.attributes) {
          let attributeValue =
            e.target[kebabCase(`${product.name} ${attribute.name}`)].value;
          if (!attributeValue) {
            alert("Please enter the attributes correctly");
            return;
          }
          newItem.attributes.push({
            name: attribute.name,
            value: attributeValue,
          });
        }
        addItem(newItem);
      }}
    >
      <p class="text-lg mb-2 font-bold font-heading">{product.name}</p>
      <p class="mb-2">
        USD{" "}
        {product.prices.filter((price) => price.currency === "USD")[0].amount}
      </p>
      {product.attributes.map((attribute) => (
        <ProductAttribute attribute={attribute} product={product} />
      ))}
      <button
        type="submit"
        class="px-3 py-2 mt-4 bg-yellow-200 hover:bg-yellow-500 text-black rounded-lg"
      >
        Add to cart
      </button>
    </form>
  );
}

function ProductAttribute({ attribute, product }) {
  return (
    <div class="flex flex-row">
      <p class="mr-4">{attribute.name}: </p>
      {attribute.items.map((item) => (
        <AttributeItem item={item} product={product} attribute={attribute} />
      ))}
    </div>
  );
}

function AttributeItem({ item, attribute, product }) {
  return (
    <label
      for={kebabCase(`${product.name} ${attribute.name} ${item.displayValue}`)}
      className="mr-3"
    >
      <input
        className="mr-1"
        type="radio"
        name={kebabCase(`${product.name} ${attribute.name}`)}
        id={kebabCase(`${product.name} ${attribute.name} ${item.displayValue}`)}
        value={item.value}
      />
      {item.displayValue}
    </label>
  );
}

export default connect(
  ({ cart }) => ({
    cart: cart,
  }),
  { addItem }
)(ProductItem);
