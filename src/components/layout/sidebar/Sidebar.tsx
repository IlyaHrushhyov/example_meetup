import { Box } from '@mui/system';
import Ract, {FC} from 'react'
import {Link} from 'react-router-dom'
import AllCategories from './AllCategories';


interface SidebarProps {
    
}


const Sidebar: FC<SidebarProps> = () => {
    return (
    <div>
        <Box sx={{display: 'flex', alignItems:'center'}}>
            <Link to='/profile'>
                <Box sx={{position:'realtive', marginRight:5}}>
                    <Box sx={{backgroundColor:'green', width: 4, height: 4, position: 'absolute', bottom: 2, left: 2}}>
                    <AllCategories/>
                    </Box>
                </Box>
            </Link>
        </Box>
    </div>  );
}
 
export default Sidebar;