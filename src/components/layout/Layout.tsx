import { Box, Grid } from '@mui/material';
import Ract, { FC } from 'react'
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './Layout.css'

const Layout: FC = ({ children }) => {
    return (
        <>
            <Grid container spacing={2} marginX={50} marginTop={2}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={1.5}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10.5}>
                    
                </Grid>
            </Grid>
        </> 
    );
}

export default Layout;