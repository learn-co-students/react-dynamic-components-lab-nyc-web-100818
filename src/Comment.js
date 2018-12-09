import React, {Component} from 'react';

export default class Comment extends Component { //export default -> exports the class so it can be used in other files (Component)
  render() {
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
    );
  }
}
