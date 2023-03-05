import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import element from "../../images/nodel-ba-panir.jpg";
import author from "../../images/author.jpg";
import Rating from "@mui/material/Rating";
import PageBanner from "../Banner/PageBanner.js";
import chief_profile_img from "../../images/chief_profile.jpg";
import author_avatar from "../../images/author-avatar.png";
import {
  ChiefCard,
  ChiefContainer,
  ChiefH1,
  ChiefH2,
  ChiefImage,
  ChiefP,
  ChiefWrapper,
} from "./ForumStyle";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar-second";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
function ForumDetail() {
  const [Forum, setForum] = useState({});
  const { register, handleSubmit } = useForm();
  const [chiefDetail, setChiefDetail] = useState({});
  const { ForumID } = useParams();
  // useEffect(() => {
  //   // fetch("http://localhost:9000/movies")
  //   //   .then((res) => res.json())
  //   //   .then((movie) => console.log(movie));
  // }, []);
  return (
    <>
      <Sidebar />
      <Navbar />
      <Grid container spacing={2}>
        <Grid container item spacing={2} xs={12} sm={12} md={3}>
          <Grid item xs={12} sm={12} md={12}>
            <ChiefContainer>
              <ChiefH1>پروفایل آشپز {chiefDetail.username}</ChiefH1>
              <ChiefWrapper>
                <ChiefCard>
                  <ChiefImage src={chief_profile_img}></ChiefImage>
                  <ChiefH2>
                    {chiefDetail.first_name} {chiefDetail.last_name}
                  </ChiefH2>
                  <ChiefP>{chiefDetail.bio}</ChiefP>

                  <a
                    href={
                      "mailto: " +
                      chiefDetail.email +
                      "?subject=Mail from Cookommunity"
                    }
                  >
                    سوالات خود را بپرسید!
                  </a>
                  <button class="mbtn">دنبال کن !</button>
                  <button class="mbtn2">دنبال نکن :(</button>
                </ChiefCard>
              </ChiefWrapper>
            </ChiefContainer>
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} sm={12} md={9}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="forum_body_area">
              <div className="f-p-container">
                <h1 className="f-title">فوروم 1</h1>
                <button class="mbtn">دنبال کن !</button>
                <button class="mbtn2">دنبال نکن :(</button>
              </div>
              <div class="forum-post-top">
                <a class="author-avatar" href="#">
                  <img src={author_avatar} alt="author avatar" />
                </a>
                <div class="forum-post-author">
                  <a class="author-name" href="#">
                    Eh Jewel
                  </a>
                  <div class="forum-author-meta">
                    <div class="author-badge">
                      <span>Conversation Starter</span>
                    </div>
                    <div class="author-badge">
                      <i class="icon_calendar"></i>
                      <p>January 16 at 10:32 PM</p>
                    </div>
                  </div>
                  <div class="comment-content">
                    <p>
                      Cheeky chap jolly good mufty a load of old tosh I don't
                      want no agro a chinwag amongst tickety-boo, tosser
                      victoria sponge horse play happy days give us a bell nice
                      one cup of tea young delinquent wellies, cockup absolutely
                      bladdered barmy bleeding.!
                    </p>
                  </div>
                </div>
              </div>
              <form id="review-form" className="review-form">
                <h4>نظر خود را بنویسید</h4>
                <br />
                <input
                  type="text"
                  placeholder="متن"
                  className="form-control"
                  {...register("last_name")}
                />
                <button class="btn action_btn thm_btn" type="submit">
                  ثبت نظر
                </button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ForumDetail;
