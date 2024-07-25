import React, { useState } from "react";
import CommentList from "./comment-list";

const CommentItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrent] = useState({});

  const handleToggleChildren = (id) => {
    setDisplayCurrent({
      ...displayCurrentChildren,
      [id]: !displayCurrentChildren[id],
    });
  };

  return (
    <li className="list-item">
      <div className="list-item-div1">
        <div>
          <p>{item.author}</p>
          <p>{item.date.toLocaleString()}</p>
          <p>{item.text}</p>
        </div>
        <div className="list-item-div2">
          {item && item.children && item.children.length > 0 ? (
            <span onClick={() => handleToggleChildren(item.id)}>
              {displayCurrentChildren[item.id] ? "-" : "+"}
            </span>
          ) : null}
        </div>
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.id] ? (
        <CommentList list={item.children} />
      ) : null}
    </li>
  );
};

export default CommentItem;
