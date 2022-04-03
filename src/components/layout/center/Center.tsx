import { useContext, useEffect, useState } from 'react'
import ListOfLots from './LotCard/ListOfLots';
import {lotService} from '../../../services/lot-service'
import lotModel from '../../../models/lotModel';
import Spinner from '../spinner/spinner';
import { FormLabel } from '@mui/material';
import CurrentSubCategoryCtx from '../../contexts/CurrentSubCategory';
import SearchContext from '../../contexts/SearchContext';
import LotContext from '../../contexts/LotsContext'

const Center = () => {

    const {currentSubCategory, currentSubCategoryText} = useContext(CurrentSubCategoryCtx);
    const {searchText} = useContext(SearchContext);
    const {lots, setLots} = useContext(LotContext);
    // const [listOfLots, setLots] = useState<Array<lotModel>>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(()=>{
        setLoading(true);
        if(currentSubCategory !== 'all' && searchText === ''){
            lotService.getLotsBySubcategory(currentSubCategory).then((response)=>setLots(response.data)).then(()=>setLoading(false));
        }
        else if(searchText !== '' && currentSubCategory === 'all'){
            lotService.getLotsByName(searchText).then((response)=>setLots(response.data)).then(()=>setLoading(false));
        }
        else{
            lotService.getAllLots().then((response)=>setLots(response.data)).then(()=>setLoading(false));
        }
    },[currentSubCategory, searchText]);
    
    return (
        <>
            <div>
                <FormLabel id="demo-row-radio-buttons-group-label">{currentSubCategoryText}</FormLabel>
                {loading ? (<Spinner/>) : (<ListOfLots lots={lots}/>)}
            </div>
        </> 
    );
}

export default Center;