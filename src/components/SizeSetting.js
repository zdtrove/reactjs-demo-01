import React, { Component } from 'react';

class SizeSetting extends Component {

    changeSize(sizeParam) {
        this.props.onChangeSize(sizeParam);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : { this.props.fontSizeFromAppToSizeSetting }px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={ () => this.changeSize(-2) }>Giam</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={ () => this.changeSize(2) }>Tang</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
