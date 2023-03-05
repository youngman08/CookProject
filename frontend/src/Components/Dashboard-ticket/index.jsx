import React from "react";
import { Container } from "./Dash-promotion";
import DashboardSidebar from "../Dashboard/Dash-sidebar";
import DashboardHeader from "../Dashboard/Dash-header";
import author_avatar from "../../images/author-avatar.png";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import "./dash-promotion.css";
const DashPromotionComponent = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Grid container spacing={2}>
      <Container>
        <Grid container item spacing={2} xs={12} sm={12} md={3}>
          <DashboardSidebar />
        </Grid>
        <Grid container item spacing={2} xs={12} sm={12} md={9}>
          <Grid item xs={12} sm={12} md={12}>
            <DashboardHeader />
            <div className="ticket_body_area">
              <div className="f-p-container">
                <h1 className="f-title">تیکت های من</h1>

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
      </Container>
    </Grid>
  );
};

export default DashPromotionComponent;
