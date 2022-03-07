import { useContext, useEffect } from 'react';
import List from '@mui/material/List';
import lotModel from '../../../../models/lotModel';
import LotCard from './LotCard';
import { ListItem } from '@mui/material';
import CurrentSubCategoryCtx from '../../../contexts/CurrentSubCategory';

interface Props{
    lots:Array<lotModel>
}

const ListOfLots = (props: Props) => {

    return(
        <List>
            {props.lots.map((item)=>(
                <ListItem>
                    <LotCard lot={item}/>
                </ListItem>
            ))}
        </List>
    )
}

export default ListOfLots;