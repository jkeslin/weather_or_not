import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default class TemperatureSlider extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, newValue) {
        this.props.onTemperatureChange(this.props.garment.id, newValue);
    }

    render() {
        return (
            <div className="temperature-slider">
                <Typography gutterBottom>
                    {this.props.garment.name}
                </Typography>
                <Slider
                    value={this.props.garment.value}
                    step={5}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}