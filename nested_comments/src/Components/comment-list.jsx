import React from "react";
import CommentItem from "./comment-item";

const CommentList = ({ list = [] }) => {
  return (
    <ul className="comment-list-container">
      {list && list.length > 0
        ? list.map((listItem) => <CommentItem item={listItem} />)
        : null}
    </ul>
  );
};

export default CommentList;
