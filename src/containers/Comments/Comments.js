import React from "react";
import CommentsHeader from "./CommentsHeader/CommentsHeader";

export default function Comments({ amount }) {
  return (
    <div>
      <CommentsHeader amount={amount} />
    </div>
  );
}
