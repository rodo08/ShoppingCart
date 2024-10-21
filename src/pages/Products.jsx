import { useState } from "react";
import data from "../../data.json";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState(data.products);

  return (
    <div className="container" style={{ marginBottom: "8rem" }}>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-8">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
