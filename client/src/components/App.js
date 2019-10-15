import React, { Component } from "react";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";

class App extends Component {
  state = {
    comments: []
  };

  handleMoreReplies = async id => {
    try {
      const response = await fetch(`/api/comment_replies?comment_id=${id}`);
      const replies = await response.json();
      const newComments = this.state.comments.map(comment => {
        if (comment.id === id) {
          return Object.assign({}, comment, {
            replies: comment.replies.concat(replies)
          });
        } else {
          return comment;
        }
      });
      this.setState({ comments: newComments });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async comment => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const newComment = await response.json();
      this.setState({ comments: this.state.comments.concat(newComment) });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // "
  async componentDidMount() {
    try {
      const response = await fetch("/api/comments");
      const commentData = await response.json();
      this.setState({ comments: commentData });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <CommentsList
          comments={this.state.comments}
          onMoreReplies={this.handleMoreReplies}
        />
        <CommentsForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

// replies: [
//       {
//         id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
//         comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
//         author: "Kathleen Nikolaus",
//         body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
//         postedAt: 1550419941546
//       }
//     ]
