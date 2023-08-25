import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Rating from "../components/Rating"
import { useEffect, useState } from "react";

function Product({ data, favorite, dispatch }) {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavoriteBasket = (id, e) => {
    e.preventDefault();
    // console.log("id"+id)
    let check = favorite.find((a) => a.id === id);
    if (check) {
      check.count = count;
      const updatedFavorites = [...favorite];
      if (isFavorite) {
        updatedFavorites.splice(updatedFavorites.indexOf(check), 1);
      }



      dispatch({
        type: "SET_FAVORITE",
        payload: updatedFavorites,
      });
      setIsFavorite(!isFavorite);
      return;
    }
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite, { id: id, count: count }],
    });
    localStorage.setItem(
      "favorite",
      JSON.stringify([...favorite, { id: id, count: count }])
    );
    setIsFavorite(true);
    setCount(1);
  };

  return (
    <Link to={`/shop-single/${data.id}`}>
      <div className="shop_product">
        <div className="shop_product_tag_favorite">
          <div className="shop_product_tag">
            <p>{data.category}</p>
          </div>
          <div
            onClick={(e) => addToFavoriteBasket(data.id, e)}
            className={`shop_product_favorite ${isFavorite ? 'active' : ''}`}
          >
            <i className="fa fa-solid  fa-heart"></i>
          </div>
        </div>

        <div className="shop_product_images">
          <img src={data.image} />
        </div>

        <div className="shop_product_content">
          <div className="shop_product_name">{data.name}</div>
          <div className="shop_product_pricing_rating">
            <div className="shop_product_pricing">
              <div className="old_price">${data.oldprice}</div>
              <div className="new_price">${data.newprice}</div>
            </div>
            <Rating value={data.rating} />
          </div>
        </div>
      </div>
    </Link>
  );
}

const t = (a) => a;
export default connect(t)(Product);
