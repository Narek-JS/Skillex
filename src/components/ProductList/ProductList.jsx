import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products, isLoading }) {
  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center p-10">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
