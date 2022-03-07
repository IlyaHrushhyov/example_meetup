import {useEffect, useState } from 'react';
import categoryModel from '../../../models/categoryModel';
import subCategoryModel from '../../../models/subCategoryModel';
import { categoryService } from '../../../services/category-service';
import { subCategoryService } from '../../../services/subCategory-service';
import CategoryCtx from '../../contexts/CategoryContext';
import CurrentSubCategoryCtx from '../../contexts/CurrentSubCategory';
import SearchContext from '../../contexts/SearchContext';
import SubCategoryCtx from '../../contexts/SubCategoryContext';
import Layout from '../../layout/Layout';

const Home = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [currentSubCategoryText, setCurrentSubCategoryText] = useState<string>('Все');
    const [currentSubCategory, setCurrentSubCategory] = useState<string>('all');
    const [categories, setCategories] = useState<Array<categoryModel>>([]);
    const [subCategories, setSubCategories] = useState<Array<subCategoryModel>>([]);
    useEffect(() =>{
            categoryService.getAllCategories().then((response)=>setCategories(response.data));
            subCategoryService.getAllSubCategories().then((response)=>setSubCategories(response.data));
    }, [])
    return (
       <>   
            <SearchContext.Provider value={{searchText:searchText, setSearchText:setSearchText}}>
                <CurrentSubCategoryCtx.Provider value={{currentSubCategory:currentSubCategory, setCurrentSubCategory:setCurrentSubCategory, currentSubCategoryText:currentSubCategoryText, setCurrentSubCategoryText:setCurrentSubCategoryText}}>
                    <SubCategoryCtx.Provider value={{subCategories:subCategories}}>
                        <CategoryCtx.Provider value={{categories:categories}}>
                            <Layout/>
                        </CategoryCtx.Provider>
                    </SubCategoryCtx.Provider>
                </CurrentSubCategoryCtx.Provider>
            </SearchContext.Provider>
       </>
    );
}
 
export default Home;