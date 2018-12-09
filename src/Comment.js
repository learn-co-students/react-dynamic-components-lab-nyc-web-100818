import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
    );
  }
}//end of extends Component

export default Comment;
