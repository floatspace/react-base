import React, { useState, MouseEvent } from "react";

export interface LikeButtonProps {
  onClick?: (like: number) => void;
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
  const { onClick } = props;
  let [like, setLike] = useState(0);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setLike(like + 1);
    // 回调
    onClick && onClick(like);
  };
  return (
    <div onClick={handleClick}>
      <button style={{ padding: "5px 12px" }}>赞{like}</button>
    </div>
  );
};

export default LikeButton;
