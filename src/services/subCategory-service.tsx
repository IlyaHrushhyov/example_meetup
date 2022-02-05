import {axiosInstance} from './service-base';
import subCategoryModel from '../models/subCategoryModel'

export const subCategoryService = {
    getAllSubCategories(){
        return axiosInstance.get<Array<subCategoryModel>>(`SubCategory/getSubCategories`);
    }
}