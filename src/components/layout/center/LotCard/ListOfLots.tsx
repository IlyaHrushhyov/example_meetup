import React from 'react';
import List from '@mui/material/List';
import lotModel from '../../../../models/lotModel';
import LotCard from './LotCard';
import { ListItem } from '@mui/material';

interface Props{
    lots:Array<lotModel>
}

export default function ListOfLots(props: Props) {
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