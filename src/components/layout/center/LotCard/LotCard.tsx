import React from 'react';
import { Wrapper } from './Card.styled';
import lotModel from '../../../../models/lotModel';
import img1 from '../../../../images/logoef.png';
import img2 from '../../../../images/Killing_customers.jpg';
import { DefaultDeserializer } from 'v8';

interface Lot{
  lot:lotModel;
}

const LotCard =(props:Lot) => {
    return(
      <Wrapper>
        <div>
        <img src={img2} width={200} height={140}></img>
        </div>
        <div>
          <h3>{props.lot.name}</h3>
          <h3>{props.lot.price}</h3>
        </div>
      </Wrapper>
    )
}

export default LotCard;