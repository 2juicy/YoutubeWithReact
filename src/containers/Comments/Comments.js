import React from "react";
import CommentsHeader from "./CommentsHeader/CommentsHeader";
import Comment from "./Comment/Comment";
import AddComment from "./AddComment/AddComment";

function Comments({ amount }) {
  return (
    <div>
      <CommentsHeader amount={amount} />
      <AddComment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default React.memo(Comments);
