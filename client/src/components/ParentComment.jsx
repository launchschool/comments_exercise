import React from 'react';
import Comment from './Comment';
import store from '../lib/store';

class ParentComment extends React.Component {
  onShowMoreClick = () => {
    let {id} = this.props.comment;

    global.fetch(`/api/comment_replies?comment_id=${id}`)
      .then(response => response.json())
      .then(replies => {
        store.dispatch({replies, comment_id: id, type: 'REPLIES_RECEIVED'});
      });
  };

  render() {
    let {comment} = this.props;
    
    let replies = store.getState().replies.filter((rep) => {
      return comment.id === rep.comment_id;
    });

    return (
      <div className="parent-comment">
        <Comment
          id={comment.id}
          author={comment.author}
          body={comment.body}
          postedAt={comment.postedAt}
        />
        <div className="replies">
          {
            replies.map((reply) => <Comment key={reply.id} {...reply} />)
          }
          {
            comment.replies_count > replies.length &&
            <a
              className="show-more"
              onClick={this.onShowMoreClick}
            >
              Show More Replies ({comment.replies_count - replies.length})
            </a>
          }
        </div>
      </div>
    );
  }
}

export default ParentComment;
