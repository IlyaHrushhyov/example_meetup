import {Grid} from '@mui/material';
import Sidebar from './sidebar/Sidebar';
import Center from './center/Center';

const MainPlate = () =>{

  return (
    <>
        <Grid item xs={1.5}>
            <Sidebar/>
        </Grid>
        <Grid item xs={10.5}>
            <Center/>
        </Grid>
    </>
  );
}

export default MainPlate;