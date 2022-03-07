import React from "react";

interface ISearchCtx{
    searchText: string,
    setSearchText: (subCategoryId: string) => void
}

const CurrentSubCategoryCtx = React.createContext<ISearchCtx>({
    searchText: '',
    setSearchText: ()=>{},
});

export default CurrentSubCategoryCtx;