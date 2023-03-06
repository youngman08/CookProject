import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import element from "../../images/nodel-ba-panir.jpg";
import author from "../../images/author.jpg";
import Rating from "@mui/material/Rating";
import PageBanner from "../Banner/PageBanner.js";
import chief_profile_img from "../../images/chief_profile.jpg";
import author_avatar from "../../images/author-avatar.png";
import axios from "axios";
import {BASE_API, check_error} from "../../App";

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
  

  // Read: With using following functions, this page doesn't work, implicitly put codes below in html code line 207 -> 278 

  // function follow_chief() {
  //   axios
  //       .put(BASE_API + `accounts/${chiefName}/follow/?username=${username}`,{
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       ).then((response)  => {
  //         console.log(response.data)
  //       })
  //       .catch((error) => {
  //         console.log("error in follow chief.");
  //       });
  // }

  // function unfollow_chief() {
  //   axios
  //       .delete(BASE_API + `accounts/${chiefName}/unfollow/?username=${username}`,{
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       ).then((response)  => {
  //         console.log(response.data)
  //       })
  //       .catch((error) => {
  //         console.log("error in follow chief.");
  //       });
  // }  
  
  // function followForum() {
  //   axios
  //       .patch(BASE_API + `forums/${forumId}/join/?username=${localStorage.getItem("username")}`,{
  //             headers: {
  //               "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         setFollowed(true); //results
  //       })
  //       .catch((error) => {
  //         console.log("error in get forum info.");
  //       });
  // }

  // function unfollowForum() {
  //   axios
  //       .patch(BASE_API + `forums/${forumId}/leave/?username=${localStorage.getItem("username")}`,{
  //             headers: {
  //               "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         setFollowed(false); //results
  //       })
  //       .catch((error) => {
  //         console.log("error in get forum info.");
  //       });
  // }

  const onSubmit = (data) => {
    console.log("on submit text:");
    console.log(data)
    axios
        .post(
            BASE_API + `forums/${forumId}/post/`,
            {
              params: {
                sender: localStorage.getItem("username"),
                text: data.text
              },
              headers: {
                  "Content-Type": "application/json",
              },
            }
        )
        .then((response) => {
            if (check_error(response.data))
                alert(response.data.err_msg)
            else{
                alert("نظر شما با موفقیت ثبت شد.")
                window.location.reload(false);
            }
        })
        .catch((error) => {
        });
  };

  while (Forum.messages == undefined){
    return <>Still loading...</>;
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
                  <button class="mbtn" onClick={() => {
                                                        axios
                                                        .put(BASE_API + `accounts/${chiefName}/follow/?username=${username}`,{
                                                            headers: {
                                                              "Content-Type": "application/json",
                                                            },
                                                          }
                                                        ).then((response)  => {
                                                          console.log(response.data)
                                                          alert("این آشپز به لیست دنبال کننده ها اضافه شد.");
                                                        })
                                                        .catch((error) => {
                                                          console.log("error in follow chief.");
                                                        });
                  }}>دنبال کن !</button>
                  <button class="mbtn2" onClick={() => {
                                                        axios
                                                        .delete(BASE_API + `accounts/${chiefName}/unfollow/?username=${username}`,{
                                                            headers: {
                                                              "Content-Type": "application/json",
                                                            },
                                                          }
                                                        ).then((response)  => {
                                                          console.log(response.data)
                                                          alert("این آشپز از لیست دنبال کننده ها حذف شد.");
                                                        })
                                                        .catch((error) => {
                                                          console.log("error in follow chief.");
                                                        });
                  }}>دنبال نکن :(</button>
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
                <button class="mbtn" onClick={() => {axios
                                                        .patch(BASE_API + `forums/${forumId}/join/?username=${localStorage.getItem("username")}`,{
                                                              headers: {
                                                                "Content-Type": "application/json",
                                                            },
                                                          }
                                                        )
                                                        .then((response) => {
                                                          console.log(response.data);
                                                          setFollowed(true); //results
                                                          alert("به این فرم اضافه شدی.");
                                                        })
                                                        .catch((error) => {
                                                          console.log("error in get following forum.");
                                                        });}
                }>دنبال کن !</button>
                <button class="mbtn2" onClick={() => {axios
                                                        .patch(BASE_API + `forums/${forumId}/leave/?username=${localStorage.getItem("username")}`,{
                                                              headers: {
                                                                "Content-Type": "application/json",
                                                            },
                                                          }
                                                        )
                                                        .then((response) => {
                                                          console.log(response.data);
                                                          setFollowed(false); //results
                                                          alert("از این فرم خارج شدی.");
                                                        })
                                                        .catch((error) => {
                                                          console.log("error in unfollowing forum.");
                                                        });}
                }>دنبال نکن :(</button>
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
              <form id="review-form" className="review-form" onSubmit={handleSubmit(onSubmit)}>
                <h4>نظر خود را بنویسید</h4>
                <br />
                <input
                  type="text"
                  placeholder="متن"
                  className="form-control"
                  {...register("text")}
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
