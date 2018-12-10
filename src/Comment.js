// add Comment component here
import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    return (
      <div className="comment">
       { this.props.commentText }
      </div>
    )
  }

}

// export default Comment;
// create a new file, Comment.js within src/ and don't forget to:
// import React, { Component } from 'react' at the top of our file
// Use the class X extends Component {} syntax
// export the class so it can be used in other files
// import the class in BlogPost
// it should expect a single prop (the text of a comment), which can be used in the component via: this.props.commentText. This prop is passed in src/BlogPost.js
// it should have a single <div> in its render() method
// the <div> should have a className="comment" attribute
// Note: The BlogPost component needs minor alteration to properly pass the contents of its commentsArray to each of the Comment components that it is rendering
// Don't forget - we can unpack variable values directly with JSX by wrapping them in {}, i.e. {this.props.commentText}
