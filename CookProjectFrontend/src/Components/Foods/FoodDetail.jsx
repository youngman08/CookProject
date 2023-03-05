import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import element from "../../images/nodel-ba-panir.jpg";
import author from "../../images/author.jpg";
import Rating from "@mui/material/Rating";
import PageBanner from "../Banner/PageBanner.js";
import axios from "axios";
import {BASE_API} from "../../App";

function ViewDetailFood(food) {
  console.log(food);
  return (
    <>
    <PageBanner pageName={"طرز پخت"} />
    <div className="food-detail container">
      <div className="detail-body">
        <div className="food-details-content">
          <h2 className="card-title">
            لازانیا با پنیر
            <span className="release-year"> برای 4 نفر</span>
          </h2>
          <div className="author">
            <img src={author} alt="author" />
            <h6>{food.chief.first_name} {food.chief.last_name}</h6>
          </div>
          <div className="rating">
            <Rating name="read-only" value={4/*{food.rate}*/} readOnly />
            <span className="price">{food.price}</span>
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

function FoodDetail() {
  const [food, setFood] = useState({});
  const { food_id } = useParams();
  console.log(food_id);
  console.log("first kh");
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
  
  // while(food.chief == undefined){
  //   console.log("vaysa");
  // }

  console.log("hala");
  console.log(food);
  console.log(food.chief);
  console.log(food.chief);

  

  

  return (
    <>
    <PageBanner pageName={"طرز پخت"} />
    <div className="food-detail container">
      <div className="detail-body">
        <div className="food-details-content">
          <h2 className="card-title">
            لازانیا با پنیر
            <span className="release-year"> برای 4 نفر</span>
          </h2>
          <div className="author">
            <img src={author} alt="author" />
            <h6>{food.chief.first_name} {food.chief.last_name}</h6>
          </div>
          <div className="rating">
            <Rating name="read-only" value={food.rate} readOnly />
            <span className="price">{food.price}</span>
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
