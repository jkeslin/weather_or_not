import React, { useContext, useState, useRef } from 'react';
import { WeatherContext } from './WeatherContext';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = [{ unit: 'f', display: '°F' }, {unit: 'c', display: '°C' }];

const UnitToggle = () => {
    const [,setWeather] = useContext(WeatherContext);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        setWeather(previous => ({ ...previous, displayUnits: options[index].unit}));
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) return;
        setOpen(false);
    };

    return (
        <Grid container direction="column" alignItems="flex-end" spacing={5}>
            <Grid item xs={12}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                    <Button>{options[selectedIndex].display}</Button>
                    <Button
                        color="primary"
                        size="small"
                        aria-label="select temperature units"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList>
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option.unit}
                                        selected={index === selectedIndex}
                                        onClick={() => handleMenuItemClick(index)}
                                    >
                                        {option.display}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Popper>
            </Grid>
        </Grid>
    );
}

export default UnitToggle;