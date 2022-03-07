import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import CurrentSubCategoryCtx from '../../contexts/CurrentSubCategory';
import SearchContext from '../../contexts/SearchContext';



export default function CustomizedInputBase() {
  const {setCurrentSubCategory} = useContext(CurrentSubCategoryCtx);
  const {setSearchText} = useContext(SearchContext);
  const [text, setText] = useState<string>('');
  return (
    <Paper
      component="form"
      sx={{ p: '2px 20px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск..."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={event=>{                                
          setText(event.target.value)
        }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={()=>{setCurrentSubCategory('all'); setSearchText(text)}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}