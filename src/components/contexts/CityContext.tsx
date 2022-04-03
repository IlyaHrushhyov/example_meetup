import React from "react";
import cityModel from "../../models/cityModel";

interface ICityCtx{
    cities: Array<cityModel>
}

const defaultState ={
    cities: []
}

const CityCtx = React.createContext<ICityCtx>(defaultState);

export default CityCtx;