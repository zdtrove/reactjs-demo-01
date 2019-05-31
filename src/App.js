import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorDefault : 'red',
            fontSizeDefault : 15
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
    }

    onSetColor(colorParam) {
        this.setState({
            colorDefault : colorParam
        });
    }

    onChangeSize(sizeParam) {
        this.setState({
            fontSizeDefault : (this.state.fontSizeDefault + sizeParam >= 8 && this.state.fontSizeDefault + sizeParam <= 36) ? this.state.fontSizeDefault + sizeParam : this.state.fontSizeDefault
        });
    }

    onSettingDefault(param) {
        if (param === true) {
            this.setState({
                colorDefault : 'red',
                fontSizeDefault : 12
            });
        }
    }

    render() {
        return (
            <div className="container mt-50">
                <ColorPicker 
                    colorFromAppToColorPicker={ this.state.colorDefault } 
                    onReceiveColor={ this.onSetColor } 
                />
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <SizeSetting 
                        fontSizeFromAppToSizeSetting={ this.state.fontSizeDefault } 
                        onChangeSize={ this.onChangeSize } 
                    />
                    <Reset onSettingDefault={ this.onSettingDefault } />
                </div>
                <Result colorFromAppToResult={ this.state.colorDefault } fontSizeFromAppToResult={ this.state.fontSizeDefault } />
            </div>
        );
    }
}

export default App;
