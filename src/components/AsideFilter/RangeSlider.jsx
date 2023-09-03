import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { debounce } from '@material-ui/core';

const RangeSlider = ({slider, setSlider}) => {

  const handleChange = (event, newValue) => {
    setSlider(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        defaultValue={slider}
        onChange={debounce(handleChange, 500)}
        valueLabelDisplay="auto"
        min={0}
        max={30000}
      />
    </Box>
  );
}

export default RangeSlider;