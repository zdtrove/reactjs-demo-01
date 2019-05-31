import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorsPickerList : ['red', 'green', 'blue', '#ccc']
        };
    }

    showColor(colorParam) {
        return {
            backgroundColor : colorParam
        };
    }

    setActiveColor(colorActive) {
        this.props.onReceiveColor(colorActive);
    }

    render() {

        var elmColors = this.state.colorsPickerList.map((colorPicker, index) => {
            return  <span 
                        key={ index } 
                        style={ this.showColor(colorPicker) }
                        className={ this.props.colorFromAppToColorPicker === colorPicker ? 'active' : '' }
                        onClick={ () => this.setActiveColor(colorPicker) }
                    ></span>
        });

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        { elmColors }
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
