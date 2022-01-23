import { Grid } from '@mui/material';
import Ract, { FC } from 'react'
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './Layout.css'

const Layout: FC = ({ children }) => {
    return (
        <>
            <Grid container spacing={2} marginX={50} marginTop={2}>
                <Header/>
            </Grid>
        </> 
       
    );
}

export default Layout;