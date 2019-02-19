import React, { Component } from 'react';
import ParentComment from './ParentComment';

class Comments extends Component {
  render() {
    const parentComments = this.props.comments.map((c) => <ParentComment key={c.id} {...c}/>);

    return (
      <div className="comments">
        <h2>Comments ({this.props.comments.length})</h2>
        { parentComments }
      </div>
    );
  }
}

export default Comments;
