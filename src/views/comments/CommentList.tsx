import React from "react";

export interface CommentProps {
  id: number;
  name: string;
  content: string;
}

export interface CommentListProps {
  data: Array<CommentProps>;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.length
        ? data.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.content}</p>
              </li>
            );
          })
        : "暂无评论"}
    </ul>
  );
};

CommentList.defaultProps = {
  data: [],
};

export default CommentList;
