import React from "react";
import ParentComment from "./ParentComment";

const CommentsList = ({ comments, onMoreReplies }) => {
  // destructuring
  const parentComments = comments.map(comment => {
    return (
      <ParentComment
        key={comment.id}
        comment={comment}
        onMoreReplies={onMoreReplies}
      />
    );
  });

  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {parentComments}
    </div>
  );
};

export default CommentsList;
