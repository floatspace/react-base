import React from "react";
import "./style.scss";
import LikeButton from "../like-button";

export interface BusinessCardProps {
  data: {
    avatar: string;
    intro: string;
    name: string;
    mobile: string;
    post: string;
    company: string;
  };
  style?: React.CSSProperties;
}

const BusinessCard: React.FC<BusinessCardProps> = (props) => {
  const {
    data: { name, intro, avatar, mobile, post, company },
    style,
  } = props;
  return (
    <div className="business-card" style={style}>
      <img src={avatar} alt="avatar" className="avatar" />
      <h1>{name}</h1>
      <p>{intro}</p>
      <p>{post}</p>

      <LikeButton onClick={(like) => console.log(`点赞回调: ${like}`)} />
      <div className="footer">
        <p className="mobile">{mobile}</p>
        <p>{company}</p>
      </div>
    </div>
  );
};

export default BusinessCard;
