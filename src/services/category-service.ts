import {axiosInstance} from './service-base';
import categoryModel from '../models/categoryModel'

export const categoryService = {
    getAllCategories(){
        return axiosInstance.get<Array<categoryModel>>(`Category/getCategories`);
    }
}