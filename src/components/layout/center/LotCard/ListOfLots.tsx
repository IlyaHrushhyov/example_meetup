import { useContext } from 'react';
import List from '@mui/material/List';
import lotModel from '../../../../models/lotModel';
import LotCard from './LotCard';
import { ListItem } from '@mui/material';
import CurrentSubCategoryCtx from '../../../contexts/CurrentSubCategory';

interface Props{
    lots:Array<lotModel>
}

const ListOfLots = (props: Props) => {
    const currentSubCategoryCtx = useContext(CurrentSubCategoryCtx);
    let lots = [];
    if(currentSubCategoryCtx.currentSubCategory === 1){
        lots = props.lots;
    }
    else{
        lots = props.lots.filter((lot)=> lot.subCategoryId === currentSubCategoryCtx.currentSubCategory);
    }
    return(
        <List>
            {lots.map((item)=>(
                <ListItem>
                    <LotCard lot={item}/>
                </ListItem>
            ))}
        </List>
    )
}

export default ListOfLots;