import React from "react";
import "./CommentsHeader.scss";
import { Button, Icon } from "semantic-ui-react";

function CommentsHeader({ amount }) {
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

export default React.memo(CommentsHeader);
