import React, {Component} from 'react';
import store from '../lib/store';

export default class NewCommentForm extends Component {
  state = {
    author: '',
    body: '',
  };

  handleFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let commentFields = this.state;

    global.fetch(`/api/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({comment: commentFields})
    }).then(response => response.json())
      .then(comment => {
        store.dispatch({comment, type: 'COMMENT_ADDED'});
        this.setState({author: '', body: ''})
      });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Post a Comment</h2>
        <div className="input-group">
          <label>Your Name</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleFieldChange}
          />
        </div>

        <div className="input-group">
          <label>Your Comment</label>
          <textarea
            name="body"
            value={this.state.body}
            cols="30"
            rows="10"
            onChange={this.handleFieldChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
