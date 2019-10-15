import React from "react";
import moment from 'moment'

const Comment = (props) => {
  return (
    <div className="comment">
      <hr />
      <div className="image">
        <img src="/images/no-user-image.gif" alt="" />
      </div>
      <div className="header">
        <h3 className="author">{props.comment.author}</h3>
        <span>{moment(props.comment.postedAt).fromNow()}</span> 
      </div>
      <p>{props.comment.body}</p>
    </div>
  );
};

export default Comment;
