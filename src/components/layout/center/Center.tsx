import Ract, { FC, useEffect, useState } from 'react'
import ListOfLots from './LotCard/ListOfLots';
import {lotService} from '../../../services/lot-service'
import lotModel from '../../../models/lotModel';

const Center = () => {
    const [listOfLots, setLots] = useState<Array<lotModel>>([]);

    useEffect(() =>{
            lotService.getAllLots().then((response)=>setLots(response.data));
    }, []);
    return (
        <>
            <div>
                <ListOfLots lots={listOfLots}/>
            </div>
        </> 
    );
}

export default Center;