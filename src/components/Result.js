import React, { Component } from 'react';

class Result extends Component {

    setStyle() {
        return {
            color : this.props.colorFromAppToResult,
            borderColor : this.props.colorFromAppToResult,
            fontSize : this.props.fontSizeFromAppToResult
        };
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : { this.props.colorFromAppToResult } - Fontsize : { this.props.fontSizeFromAppToResult }px</p>
                <div id="content" style={ this.setStyle() } >
                    Noi dung setting
                </div>
            </div>
        );
    }
}

export default Result;
