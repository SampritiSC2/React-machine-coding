import React from "react";
import CommentList from "./comment-list";
import "./style.css";

const CommentTree = ({ data = [] }) => {
  return (
    <div className="comment-tree-container">
      <CommentList list={data} />
    </div>
  );
};

export default CommentTree;
