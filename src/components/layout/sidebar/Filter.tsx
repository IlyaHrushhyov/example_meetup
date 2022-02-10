import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Topic{
   elements: string[];
   topicName:string;
}

const RowRadioButtonsGroup = (props: Topic) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{props.topicName}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
          {props.elements.map((item) => (
                  <FormControlLabel value={item} control={<Radio />} label={item}/>
            ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RowRadioButtonsGroup;