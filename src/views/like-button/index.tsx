import React, { useState, useContext, MouseEvent } from "react";
import { ThemeContext } from "../../App";

export interface LikeButtonProps {
  onClick?: (like: number) => void;
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
  const { onClick } = props;
  let [like, setLike] = useState(0);

  const theme = useContext(ThemeContext);
  const themeStyle = {
    background: theme.background,
    color: theme.color,
    borderColor: theme.background,
    padding: "6px 12px",
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setLike(like + 1);
    // 回调
    onClick && onClick(like);
  };
  return (
    <div onClick={handleClick}>
      <button style={themeStyle}>赞{like}</button>
    </div>
  );
};

export default LikeButton;
