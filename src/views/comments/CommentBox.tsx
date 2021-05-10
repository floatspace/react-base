import React, { useState, ChangeEvent } from "react";
import { CommentProps } from "./CommentList";

interface CommentBoxProps {
  onSubmit: (comment: CommentProps) => void;
}

const CommentBox: React.FC<CommentBoxProps> = (props) => {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    const res = {
      id: new Date().getTime(),
      name,
      content,
    };
    onSubmit && onSubmit(res);
  };
  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="姓名"
          value={name}
          onInput={handleInput}
        />
      </p>
      <p>
        <textarea></textarea>
      </p>
      <button onClick={handleClick}>提交</button>
    </div>
  );
};

export default CommentBox;
