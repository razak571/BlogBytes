import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import "./PostCard.css";

function PostCard({ $id, title, featuredImage, $createdAt }) {
  const cardRef = React.useRef(null);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <Link to={`/post/${$id}`} className={``}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=" post-card w-full bg-gray-100 rounded-xl p-4"
      >
        <div className="w-full justify-center mb-4 ">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold"> Title : {title} </h2>
        <h3 className="text-xl font-bold"> Author: {} </h3>
        <h6 className="text-xl font-bold">
          Created on : {formatDate($createdAt)}
        </h6>
      </div>
    </Link>
  );
}

export default PostCard;
