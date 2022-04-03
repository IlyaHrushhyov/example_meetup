import React from "react";
import regionModel from "../../models/regionModel";

interface IRegionCtx{
    regions: Array<regionModel>
}

const defaultState ={
    regions: []
}

const RegionCtx = React.createContext<IRegionCtx>(defaultState);

export default RegionCtx;