import { useContext, useEffect, useState } from 'react'
import ListOfLots from './LotCard/ListOfLots';
import {lotService} from '../../../services/lot-service'
import lotModel from '../../../models/lotModel';
import Spinner from '../spinner/spinner';
import { FormLabel } from '@mui/material';
import CurrentSubCategoryCtx from '../../contexts/CurrentSubCategory';

const Center = () => {
    const currentSubCategoryCtx = useContext(CurrentSubCategoryCtx);
    
    const [listOfLots, setLots] = useState<Array<lotModel>>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    
    useEffect(() =>{
        setLoading(true);
        lotService.getAllLots().then((response)=>setLots(response.data));
        setLoading(false)
    }, []);

    return (
        <>
            <div>
                <FormLabel id="demo-row-radio-buttons-group-label">{currentSubCategoryCtx.currentSubCategoryText}</FormLabel>
                {loading ? (<Spinner/>) : (<ListOfLots lots={listOfLots}/>)}
            </div>
        </> 
    );
}

export default Center;