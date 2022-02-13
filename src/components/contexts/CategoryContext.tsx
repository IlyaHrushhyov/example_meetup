import React from "react";
import categoryModel from "../../models/categoryModel";

interface ICategoryCtx{
    categories: Array<categoryModel>
}

const defaultState ={
    categories: []
}

const CategoryCtx = React.createContext<ICategoryCtx>(defaultState);

export default CategoryCtx;