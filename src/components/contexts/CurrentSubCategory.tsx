import React from "react";


// interface ICurrentSubCategory{
//     currentSubCategoryId: string|number
// }

interface ICurrentSubCategoryCtx{
    currentSubCategory: string|number,
    setCurrentSubCategory: (subCategoryId: string|number) => void;
}

const CurrentSubCategoryCtx = React.createContext<ICurrentSubCategoryCtx>({
    currentSubCategory: 1,
    setCurrentSubCategory: ()=>{}
});

export default CurrentSubCategoryCtx;