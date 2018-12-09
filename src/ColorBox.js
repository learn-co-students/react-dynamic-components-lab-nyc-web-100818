import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

  //   return (
  //     <div className="color-box" style={{opacity: 2}}>
  //       {/* your conditional code here! */}
  //     </div>
  //   )

    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity:this.props.opacity}}>
        <ColorBox opacity = {this.props.opacity - 0.1}/>
        </div>
      );
    } else {
      return null;
    }
  }

}
