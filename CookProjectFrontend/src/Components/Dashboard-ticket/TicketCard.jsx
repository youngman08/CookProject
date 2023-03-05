import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import element from "../../images/nodel-ba-panir.jpg";
import author_avatar from "../../images/author-avatar.png";

function TicketCard({ ticket }) {
    return (
    <Grid item xs={12} sm={6} md={4}>
            <div class="forum-post-top">
                <a class="author-avatar" href="#">
                  <img src={author_avatar} alt="author avatar" />
                </a>
                <div class="forum-post-author">
                  <a class="author-name" href="#">
                    {ticket.username}
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
                      {ticket.text}
                    </p>
                  </div>
                </div>
              </div>
          </Grid>
  );
}

export default TicketCard;
