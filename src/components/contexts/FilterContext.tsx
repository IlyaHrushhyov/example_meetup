import React from "react";
import {ConditionEnum} from '../../enums/enums'

interface IFilterCtx{
    condition: ConditionEnum,
    setCondition: (condition: ConditionEnum) => void,
    region: string,
    setRegion: (region: string) => void,
    city: string,
    setCity: (city: string) => void,
    priceFrom: number,
    setPriceFrom: (priceFrom: number) => void
    priceUpTo: number,
    setPriceUpTo: (priceUpTo: number) => void
}

const defaultState ={
    condition: 2,
    setCondition: ()=>{},
    region: '',
    setRegion: ()=>{},
    city: '',
    setCity: ()=>{},
    priceFrom: 0,
    setPriceFrom: ()=>{},
    priceUpTo: 0,
    setPriceUpTo: ()=>{},
}

const FilterCtx = React.createContext<IFilterCtx>(defaultState);

export default FilterCtx;