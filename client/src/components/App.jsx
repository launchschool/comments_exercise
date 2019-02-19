import React from 'react';
import Comments from './Comments';
import comments from '../lib/comments';

class App extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.setState({
      comments
    });
  }

  render() {
    return <Comments comments={this.state.comments}/>;
  }
}

export default App;
