import React, { Component } from 'react';
import TemperatureSlider from './TemperatureSlider';
import WardrobeNeeds from './WardrobeNeeds';
import { Grid } from '@material-ui/core';

export default class TemperatureTolerances extends Component {
    constructor(props) {
        super(props);
        this.state = {
            garments: [
                {   
                    id: 1,
                    name: 'Jacket',
                    value: 60,
                },
                {
                    id: 2,
                    name: 'Hat',
                    value: 60,
                },
                {
                    id: 3,
                    name: 'Scarf',
                    value: 40,
                },
                {
                    id: 4,
                    name: 'Gloves',
                    value: 40,
                }
            ]
        };

        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }

    handleTemperatureChange(id, newValue) {
        this.setState(previous => ({ garments: this.updateValue(id, newValue, previous.garments) }));
    }

    updateValue(id, newValue, garments) {
        return garments.map((garment) => {
            if(garment.id === id) {
                garment.value = newValue;
            }
            return garment;
        });
    }

    render() {
        return (
            <Grid container direction="column" alignItems="center" spacing={5}>
                <Grid item xs={12}>
                    <WardrobeNeeds garments={this.state.garments} />
                </Grid>
                <Grid item xs={12}>
                    {this.state.garments.map(garment =>
                        <TemperatureSlider
                            key={garment.id}
                            garment={garment}
                            onTemperatureChange={this.handleTemperatureChange}
                        />
                    )}
                </Grid>
            </Grid>
        );
    }
}