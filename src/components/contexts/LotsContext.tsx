import React from "react";
import lotModel from "../../models/lotModel";

interface ILotCtx{
    lots: Array<lotModel>,
    setLots: (lots: Array<lotModel>) => void,
}

const defaultState ={
    lots: [],
    setLots: ()=>{},
}

const LotCtx = React.createContext<ILotCtx>(defaultState);

export default LotCtx;