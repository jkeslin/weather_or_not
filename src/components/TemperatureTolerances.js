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
                    tempNeeded: 60,
                },
                {
                    id: 2,
                    name: 'Hat',
                    tempNeeded: 50,
                },
                {
                    id: 3,
                    name: 'Scarf',
                    tempNeeded: 30,
                },
                {
                    id: 4,
                    name: 'Pair of Gloves',
                    tempNeeded: 40,
                }
            ]
        };

        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }

    handleTemperatureChange(id, newValue) {
        this.setState(previous => ({ garments: this.updateTemp(id, newValue, previous.garments) }));
    }

    updateTemp(id, newValue, garments) {
        return garments.map((garment) => {
            if(garment.id === id) {
                garment.tempNeeded = newValue;
            }
            return garment;
        });
    }

    render() {
        return (
            <Grid container direction="column" alignItems="center" spacing={5} data-testid="temperature-tolerances">
                <Grid item xs={12}>
                    <WardrobeNeeds garments={this.state.garments} />
                </Grid>
                <Grid item xs={12}>
                    <p>Set the temperatures at which you need the following items:</p>
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