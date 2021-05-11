import React, { useState } from "react";
import CommentList, { CommentProps, CommentListProps } from "./CommentList";
import CommentBox from "./CommentBox";
import "./style.scss";

const Comments = () => {
  const [commentsList, setComments] = useState([]);
  const handleSubmit = (data: CommentProps) => {
    console.log(data);
    setComments((prev: any) => {
      return prev.concat([data]);
    });
  };
  return (
    <div className="comment-wrapper">
      <CommentList data={commentsList}></CommentList>
      <CommentBox
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      ></CommentBox>
    </div>
  );
};

export default Comments;
