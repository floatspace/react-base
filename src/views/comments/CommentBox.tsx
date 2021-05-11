import React, { useState, ChangeEvent, KeyboardEvent } from "react";
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
  const handleChange = (e: any) => {
    setContent(e.target.value);
  };
  const handleClick = () => {
    const res = {
      id: new Date().getTime(),
      name,
      content,
    };
    onSubmit && onSubmit(res);
    setName("");
    setContent("");
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "Enter" && content.length) {
      handleClick();
    }
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
        <textarea
          rows={5}
          cols={50}
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="评论内容"
        ></textarea>
      </p>
      <button onClick={handleClick}>提交</button>
    </div>
  );
};

export default CommentBox;
