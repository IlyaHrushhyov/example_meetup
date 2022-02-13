import { Grid } from '@mui/material';
import Header from './header/Header';
import './Layout.css'
import MainPlate from './MainPlate';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateLot from './center/CreateLot';

const Layout = () => {
    
    return (
        <>
            <Router>
                    <Grid container spacing={2} marginX={50} marginTop={2}>
                        <Grid item xs={12}>
                            <Header/>
                        </Grid>
                        <Routes>
                            <Route path='/mainPlate' element={<MainPlate/>}/>
                            <Route path='/createLot' element={<CreateLot/>}/>
                        </Routes>
                    </Grid>
            </Router>
        </> 
    );
}

export default Layout;