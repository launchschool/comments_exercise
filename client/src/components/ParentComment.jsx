import React from 'react';
import Comment from './Comment';

const ParentComment = (comment) => (
  <div className="parent-comment">
    <Comment
      id={comment.id}
      author={comment.author}
      body={comment.body}
      postedAt={comment.postedAt}
    />
    <div className="replies">
      {
        comment.replies.map((reply) => <Comment key={reply.id} {...reply} />)
      }
    </div>
  </div>
);

export default ParentComment;
