export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'COMMENTS_RECEIVED':
      const commentsWithoutReplies = action.comments.reduce((acc, cmnt) => {
        const {replies, ...commentWithoutReplies} = cmnt;
        return acc.concat(commentWithoutReplies);
      }, []);

      return state.concat(commentsWithoutReplies);
    case 'COMMENT_ADDED':
      return state.concat(action.comment);
    default:
      return state;
  }
}

export const repliesReducer = (state=[], action) => {
  switch (action.type) {
    case 'COMMENTS_RECEIVED':
      const replies = action.comments.reduce((acc, cmnt) => {
        const {replies, ...commentWithoutReplies} = cmnt;
        return acc.concat(replies);
      }, []);

      return state.concat(replies);
    case 'REPLIES_RECEIVED':
      return state.concat(action.replies);
    default:
      return state;
  }
}
