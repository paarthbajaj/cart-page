import { useState } from "react";
import data from "../ProductData/Data.json";

const ProductList = ({ clickHandler }) => {
  return (
    <div>
      <div className="product-card">
        {data.map((item) => {
          return (
            <div className="product-item">
              <img className="product-list-img" src={item.url}></img>
              <div className="product-detail">
                <p>{item.company}</p>
                <h4>{item.product}</h4>
                <span>{item.cost}</span>
                <div className="mouse-over">
                  <button onClick={() => clickHandler(item)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
