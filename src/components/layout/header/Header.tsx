import logo from '../../../images/logoef.png' 
import CustomizedInput from './Input'
import {Button} from '@mui/material'
import './Header.css'
import './Button.css'
import { Part } from './Part.styled';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <Part>
            <div className="flexbox-container gap">
                <div>
                    <Link to='/mainPlate'>
                        <img src={logo} alt="logo" height="100"/>
                    </Link>
                </div>
                <div>
                    <CustomizedInput/>
                </div>
            </div>
          
            <div  className="flexbox-container gap">
                <Button component={Link} to='/createLot' className='button' variant="outlined">Create a lot</Button>
                <Button className='button' variant="outlined" >Log in</Button>
            </div>
        </Part>
    );
}
 
export default Header