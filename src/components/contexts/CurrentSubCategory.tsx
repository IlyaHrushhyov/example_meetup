import React from "react";

interface ICurrentSubCategoryCtx{
    currentSubCategoryText: string,
    currentSubCategory: string|number,
    setCurrentSubCategory: (subCategoryId: string|number) => void;
    setCurrentSubCategoryText: (subCategoryText: string) => void;
}

const CurrentSubCategoryCtx = React.createContext<ICurrentSubCategoryCtx>({
    currentSubCategory: 1,
    setCurrentSubCategory: ()=>{},
    currentSubCategoryText: 'Все категории',
    setCurrentSubCategoryText: ()=>{}
});

export default CurrentSubCategoryCtx;