import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import element from "../../images/nodel-ba-panir.jpg";

function FoodCard({ food }) {
    return (
    <Grid item xs={12} sm={6} md={4}>
            <div className="product-item">
              <div className="product-image">
                <img id="m-product-image" src={element} alt="Products" />
              </div>
              <div className="product-content">
                <h6>
                  <Link to={`/foods/${ food.id }`}>{ food.name }</Link>
                </h6>
                <span className="chief">
                    <Link to={`/forum-profile/${food.chief.username}`}>{food.chief.first_name} {food.chief.last_name}</Link>
                </span>
                <div className="rating">
                  <Rating value={food.score}/>
                </div>
                <span className="price">
                  <span>{food.price}</span>
                  <span>تومن</span>
                </span>
              </div>
            </div>
          </Grid>
  );
}

export default FoodCard;
