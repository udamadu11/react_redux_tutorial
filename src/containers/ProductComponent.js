import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const productList = products.map((list) => {
    const { id, title, price, description, category, image } = list;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  src={image}
                  alt={title}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta-price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{productList}</>;
};

export default ProductComponent;
