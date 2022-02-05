import React,{FC} from 'react';
import logo from '../../../images/logoef.png' 
import CustomizedInput from './Input'
import {Button} from '@mui/material'
import './Header.css'
import './Button.css'
import { Part } from './Part.styled';

const Header:FC = () => {
    return (
        <Part>
            <div className="flexbox-container gap">
                <div>
                    <img src={logo} alt="logo" height="100"/>
                </div>
                <div>
                    <CustomizedInput/>
                </div>
            </div>
          
            <div  className="flexbox-container gap">
                <Button className='button' variant="outlined" >Create a lot</Button>
                <Button className='button' variant="outlined" >Log in</Button>
            </div>
        </Part>
    );
}
 
export default Header