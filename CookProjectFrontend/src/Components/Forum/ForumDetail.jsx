import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import element from "../../images/nodel-ba-panir.jpg";
import author from "../../images/author.jpg";
import Rating from "@mui/material/Rating";
import PageBanner from "../Banner/PageBanner.js";
import chief_profile_img from "../../images/chief_profile.jpg";
import author_avatar from "../../images/author-avatar.png";
import axios from "axios";
import {BASE_API} from "../../App";

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
  const [followed, setFollowed] = useState(false);
  const { register, handleSubmit } = useForm();
  const [chiefDetail, setChiefDetail] = useState({});
  const { chiefName, forumName, forumId } = useParams();
  const username = localStorage.getItem("username");
  console.log(chiefName);
  console.log(forumName);
  console.log(forumId);
  
  useEffect(() => {
    const checkFollowed = async () => {
      await axios
        .get(BASE_API + `forums/${forumId}/checkFollowed`,{
            params: {
              username: localStorage.getItem("username")
            },
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data == "True")
            setFollowed(true); //results
          else
            setFollowed(false); //results
        })
        .catch((error) => {
          console.log("error in get checking followed forum or not.");
        });
    }
    const fetchData = async () => {
      await axios
        .get(BASE_API + "forums/view",{
            params: {
              forumId: 1,
              username: localStorage.getItem("username")
            },
              headers: {
                "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setForum(response.data); //results
        })
        .catch((error) => {
          console.log("error in get forum info.");
        });
    }
    checkFollowed();
    fetchData();
  }, []);
  
  function follow_chief(){
    axios
        .get(BASE_API + `accounts/${chiefName}/follow/?username=${username}`,{
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        ).then((response)  => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log("error in follow chief.");
        })
  }

  function unfollow_chief(){
    axios
        .get(BASE_API + `accounts/${chiefName}/unfollow/?username=${username}`,{
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        ).then((response)  => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log("error in follow chief.");
        })
    }  
  
  const followForum = () => {
    axios
        .get(BASE_API + `forums/${forumId}/join`,{
            params: {
              username: localStorage.getItem("username")
            },
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setFollowed(true); //results
        })
        .catch((error) => {
          console.log("error in get forum info.");
        });
  }

  const unfollowForum = () => {
    axios
        .get(BASE_API + `forums/${forumId}/leave`,{
            params: {
              username: localStorage.getItem("username")
            },
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setFollowed(false); //results
        })
        .catch((error) => {
          console.log("error in get forum info.");
        });
  }

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
                  <button class="mbtn" onClick={follow_chief}>دنبال کن !</button>
                  <button class="mbtn2" onClick={unfollow_chief}>دنبال نکن :(</button>
                </ChiefCard>
              </ChiefWrapper>
            </ChiefContainer>
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} sm={12} md={9}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="forum_body_area">
              <div className="f-p-container">
                <h1 className="f-title">فوروم {forumId}</h1>
                <button class="mbtn" onClick={followForum()}>دنبال کن !</button>
                <button class="mbtn2" onClick={unfollowForum()}>دنبال نکن :(</button>
              </div>
              <div class="forum-post-top">
                <a class="author-avatar" href="#">
                  <img src={author_avatar} alt="author avatar" />
                </a>
                <div class="forum-post-author">
                  
                  <div class="comment-content">
                    {Forum.messages.map((comment) => (
                      <Grid>
                        <a class="author-name" href="#">
                          {comment.sender}
                        </a>
                        <div class="forum-author-meta">
                          <div class="author-badge">
                            <span>Conversation Starter</span>
                          </div>
                          <div class="author-badge">
                            <i class="icon_calendar"></i>
                            <p>{comment.date}</p>
                          </div>
                        </div>
                        <p>
                          {comment.text}
                        </p>
                      </Grid>
                    ))}
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
