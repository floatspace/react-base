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
    <ul className="comment-list">
      {data.length > 0 && <h3>{data.length}条评论</h3>}
      {data.length
        ? data.map((comment) => {
            return (
              <li key={comment.id} className="comment-item">
                <p className="avatar">{comment.name}</p>
                <p className="content">{comment.content}</p>
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
