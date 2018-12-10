import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

      const newOpacity = parseFloat((this.props.opacity).toFixed(1))

        if (this.props.opacity >= 0.2) {
            return (
                <div className="color-box" style={{opacity: newOpacity}}>
                    <ColorBox opacity={this.props.opacity - 0.1}/>
                </div>
            );
        } else {
            return null;
        }
  }
}
