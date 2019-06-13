import React, {Component} from 'react';
import ParentComment from './ParentComment';
import store from '../lib/store';

class Comments extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());

    global.fetch('/api/comments')
      .then(response => response.json())
      .then(comments => store.dispatch({comments, type: 'COMMENTS_RECEIVED'}));
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const parentComments = store.getState().comments.map((c) => {
      return <ParentComment
               key={c.id}
               comment={c}
               onShowMoreClick={this.props.onShowMoreClick}
             />;
    });

    return (
      <div className="comments">
        <h2>Comments ({store.getState().comments.length})</h2>
        { parentComments }
      </div>
    );
  }
}

export default Comments;
