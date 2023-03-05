import React from "react";
import { Link } from "react-router-dom";
function ForumCard({ Forum }) {
  return (
    <div className="Forum-card">
      <img className="card-img" src={Forum.imageUrl} alt="" />
      <div className="card-body">
        <Link to={`/Forums/${Forum.id}`}>
          <h2 className="card-title">{Forum.title}</h2>
        </Link>
        <p className="card-description">{Forum.short_description}</p>
      </div>
    </div>
  );
}

export default ForumCard;
