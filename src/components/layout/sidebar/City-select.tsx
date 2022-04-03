import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Selectfrom '@mui/material/Select';
import cityModel from '../../../models/cityModel';
import regionModel from '../../../models/regionModel';
import { useState } from 'react';
import { Select } from '@mui/material';

interface Props{
  items:Array<cityModel>,
  topicName:string
}

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect = (props : Props) => {
  const theme = useTheme();
  const [item, setItem] = useState<string>('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <FormControl sx={{ width: 225 }}>
        <InputLabel id="demo-multiple-name-label">{props.topicName}</InputLabel>
        <Select
          open={open}
          value={item}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={event=>{                                
            setItem(event.target.value)
            if((props.items) as Array<cityModel>)
            {
              console.log('sdfsfdf');
            }
          }}
          input={<OutlinedInput label="Name" />}
        >
          {props.items.map((item) => (
            <MenuItem
              key={item.name}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;