import React, { useState } from "react";
import CommentList, { CommentProps,  CommentListProps } from "./CommentList";
import CommentBox from "./CommentBox";

const Comments = () => {
  const [commentsList, setComments] = useState([]);
  const handleSubmit = (data: CommentProps) => {
    console.log(data);
    setComments((prev: any) =>{
      return prev.concat([data])
    })
  };
  return (
    <div>
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
