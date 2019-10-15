import React from "react";
import Comment from "./Comment";

const ParentComment = props => {
  const handleMoreReplies = e => {
    e.preventDefault();

    props.onMoreReplies(props.comment.id);
  };

  return (
    <div className="parent-comment">
      <Comment comment={props.comment} />
      <div className="replies">
        {props.comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} />
        ))}
        {props.comment.replies_count === props.comment.replies.length ? null : (
          <a href="#" className="show_more" onClick={handleMoreReplies}>
            Show More Replies ({props.comment.replies_count})
          </a>
        )}
      </div>
    </div>
  );
};

export default ParentComment;
