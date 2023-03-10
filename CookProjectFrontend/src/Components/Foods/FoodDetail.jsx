import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import element from "../../images/nodel-ba-panir.jpg";
import author from "../../images/author.jpg";
import Rating from "@mui/material/Rating";
import PageBanner from "../Banner/PageBanner.js";
import axios from "axios";
import {BASE_API} from "../../App";
import { updateRating, useRating } from "../../hooks/useRating";
import Swal from "sweetalert2";
import { UnitTypeOptions } from "../CreateRecipe";

function FoodDetail() {
  const [food, setFood] = useState({});
  const { food_id } = useParams();
  const myRatings = useRating();
  const score = myRatings[food.id] || food.score;  
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(BASE_API + "recipesbyid/",{
            params: {
              recipe_id: food_id
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setFood(response.data); //results
        })
        .catch((error) => {
          console.log("error in get recipe info");
        });
    }
    fetchData();
  }, []);
  
  while(food.chief === undefined){
    return <>Still loading...</>;
  }

  return (
    <>
    <PageBanner pageName={"طرز پخت"} />
    <div className="food-detail container">
      <div className="detail-body">
        <div className="food-details-content">
          <h2 className="card-title">
            {food.name}
            <span className="release-year"> برای 4 نفر</span>
          </h2>
          <div className="author">
            <img src={author} alt="author" />
            <h6>{food.chief.first_name} {food.chief.last_name}</h6>
          </div>
          <div className="rating">
            <Rating value={score} onChange={(v) => {
              updateRating(food.id, v.target.value);
              Swal.fire("نظر شما با موفقیت ثبت شد");
            }}/>
            <span className="price">{food.price}</span>
          </div>
          <div>
            <table>
              <thead>
                <tr><td>نام</td> <td>مقدار</td></tr>
              </thead>
            {food.ingredients.map((x) => (
              <tr><td>{x.name}</td><td>{x.amount} {UnitTypeOptions[Number(x.unit) - 1].label}</td></tr>
            ))}
            </table>
          </div>
          <div className="detail-description">
            <p className="card-description">
              {" "}
              {food.description}
            </p>
          </div>
          {/* <ul className="category-tags pt-10 pb-5">
            <li>
              <b>دسته بندی</b>
              <span>:</span>
              <a href="#">Book</a>
              <a href="#">Cover</a>
              <a href="#">Course</a>
            </li>
            <li>
              <b>تگ ها</b>
              <span>:</span>
              <a href="#">Learn</a>
              <a href="#">Teach</a>
              <a href="#">Videos</a>
            </li>
          </ul> */}
        </div>
        <div className="images preview-images">
          <img className="detail-img" src={element} alt="" />
        </div>
      </div>
    
    </div>
    </>
  );
}

export default FoodDetail;
