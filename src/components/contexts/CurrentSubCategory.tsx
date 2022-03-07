import React from "react";

interface ICurrentSubCategoryCtx{
    currentSubCategoryText: string,
    currentSubCategory: string,
    setCurrentSubCategory: (subCategoryId: string) => void;
    setCurrentSubCategoryText: (subCategoryText: string) => void;
}

const CurrentSubCategoryCtx = React.createContext<ICurrentSubCategoryCtx>({
    currentSubCategory: 'all',
    setCurrentSubCategory: ()=>{},
    currentSubCategoryText: 'Все категории',
    setCurrentSubCategoryText: ()=>{}
});

export default CurrentSubCategoryCtx;