import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import element from "../../images/nodel-ba-panir.jpg";
import author from "../../images/author.jpg";
import Rating from "@mui/material/Rating";
import PageBanner from "../Banner/PageBanner.js";
function FoodDetail() {
  const [food, setFood] = useState({});
  const { food_id } = useParams();
  // useEffect(() => {
  //   // fetch("http://localhost:9000/movies")
  //   //   .then((res) => res.json())
  //   //   .then((movie) => console.log(movie));
  // }, []);
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
            <h6>آشپز رضا</h6>
          </div>
          <div className="rating">
            <Rating name="read-only" value={4} readOnly />
            <span className="price">59.58</span>
          </div>
          <div className="detail-description">
            <p className="card-description">
              {" "}
         

    ابتدا سینه مرغ خام را با پیاز، پنیر، پودر سیر و مرغ در مخلوط‌كن له كنید تا به صورت خمیر چسبناكی درآید
    در ظرف دیگری پودر پفك نمكی، پودر نان را مخلوط كنید.
    سپس از خمیر مرغ تهیه شده به اندازه یك گردو بردارید و با مرطوب كردن دست به آن فرم بدهید كه البته به شكل لوله‌ای در اندازه كوچك باشد سپس این خمیر كه حالا نامش ناگت است را در مخلوط پودر نان و پفك نمكی بغلتانید و در روغن داغ سرخ كنید.
    به دلیل آنكه پودر مخصوص ناگت دردسترس نیست، در این دستور از مخلوط پفك‌نمكی استفاده می‌شود تا به رنگ و مزه واقعی پودر ناگت نزدیك باشد


            </p>
          </div>
          <ul className="category-tags pt-10 pb-5">
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
          </ul>
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
