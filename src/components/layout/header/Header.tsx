import { Grid, TextField } from '@mui/material';
import React,{FC} from 'react';
import logo from '../../../images/logoef.png' 
import CustomizedInput from './Input'
import {Button} from '@mui/material'
import './Header.css'
import './Button.css'
import { borderColor } from '@mui/system';

const Header:FC = () => {
    return (
        <div className="part">
            <div className="flexbox-container gap">
                <div>
                    <img src={logo} alt="logo" height="100"/>
                </div>
                <div>
                    <CustomizedInput/>
                </div>
                    <Button className='button' variant="outlined" >Region</Button>
            </div>
          
            <div  className="flexbox-container gap">
                <Button className='button' variant="outlined" >Create a lot</Button>
                <Button className='button' variant="outlined" >Log in</Button>
            </div>
        </div>
    );
}
 
export default Header