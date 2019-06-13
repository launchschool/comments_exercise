import React, { Component } from 'react';
import Comments from './Comments';
import NewCommentForm from './NewCommentForm';

class App extends Component {
  handleCommentSubmit = (commentFields) => {
    global.fetch(`/api/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({comment: commentFields})
    }).then(response => response.json())
      .then(comment => this.setState({comments: this.state.comments.concat(comment)}));
  }

  render() {
    return (
      <div>
        <Comments
        />
        <NewCommentForm
          onSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

export default App;
