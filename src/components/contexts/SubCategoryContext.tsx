import React from "react";
import subCategoryModel from "../../models/subCategoryModel";

interface ISubCategoryCtx{
    subCategories: Array<subCategoryModel>
}

const defaultState ={
    subCategories: []
}

const SubCategoryCtx = React.createContext<ISubCategoryCtx>(defaultState);

export default SubCategoryCtx;