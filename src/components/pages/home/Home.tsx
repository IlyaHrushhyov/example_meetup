import {useEffect, useState } from 'react';
import categoryModel from '../../../models/categoryModel';
import cityModel from '../../../models/cityModel';
import regionModel from '../../../models/regionModel';
import subCategoryModel from '../../../models/subCategoryModel';
import { categoryService } from '../../../services/category-service';
import { subCategoryService } from '../../../services/subCategory-service';
import CategoryCtx from '../../contexts/CategoryContext';
import CityContext from '../../contexts/CityContext';
import CurrentSubCategoryCtx from '../../contexts/CurrentSubCategory';
import FilterContext from '../../contexts/FilterContext';
import {ConditionEnum} from '../../../enums/enums'
import RegionContext from '../../contexts/RegionContext';
import SearchContext from '../../contexts/SearchContext';
import SubCategoryCtx from '../../contexts/SubCategoryContext';
import LotCtx from '../../contexts/LotsContext';
import Layout from '../../layout/Layout';
import lotModel from '../../../models/lotModel';

const Home = () => {
    const [lots, setLots] = useState<Array<lotModel>>([]);
    const [condition, setCondition] = useState<ConditionEnum>(ConditionEnum.Any);
    const [cities, setCities] = useState<Array<cityModel>>([]);
    const [regions, setRegions] = useState<Array<regionModel>>([]);
    const [region, setRegion] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [priceFrom, setPriceFrom] = useState<number>();
    const [priceUpTo, setPriceUpTo] = useState<number>();
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
            <LotCtx.Provider value={{lots:lots, setLots:setLots}}>
                <CityContext.Provider value={{cities:cities}}>
                    <RegionContext.Provider value={{regions:regions}}>
                        <FilterContext.Provider value={{region:region, city:city, priceFrom:priceFrom, priceUpTo:priceUpTo, setRegion:setRegion, setCity:setCity, setPriceFrom:setPriceFrom, setPriceUpTo:setPriceUpTo, condition:condition, setCondition:setCondition}}>
                            <SearchContext.Provider value={{searchText:searchText, setSearchText:setSearchText}}>
                                <CurrentSubCategoryCtx.Provider value={{currentSubCategory:currentSubCategory, setCurrentSubCategory:setCurrentSubCategory, currentSubCategoryText:currentSubCategoryText, setCurrentSubCategoryText:setCurrentSubCategoryText}}>
                                    <SubCategoryCtx.Provider value={{subCategories:subCategories}}>
                                        <CategoryCtx.Provider value={{categories:categories}}>
                                            <Layout/>
                                        </CategoryCtx.Provider>
                                    </SubCategoryCtx.Provider>
                                </CurrentSubCategoryCtx.Provider>
                            </SearchContext.Provider>
                        </FilterContext.Provider>
                    </RegionContext.Provider>
                </CityContext.Provider>
            </LotCtx.Provider>
       </>
    );
}
 
export default Home;
