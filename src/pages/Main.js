import React from "react";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import products from "../products.json";

export default function Main() {
  return (
    <>
      <Header />
      <main className="flex flex-col py-5">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </main>
    </>
  );
}
