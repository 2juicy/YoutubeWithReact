import React from "react";
import "./CommentsHeader.scss";
import { Button, Icon } from "semantic-ui-react";

export default function Comments({ amount }) {
  return (
    <div className="comment-header">
      <h4>{amount} Comments</h4>
      <Button basic compact icon labelPosition="left">
        <Icon name="align left" />
        Sort by
      </Button>
    </div>
  );
}
