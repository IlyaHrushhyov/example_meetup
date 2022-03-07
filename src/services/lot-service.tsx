import {axiosInstance} from './service-base';
import lotModel from '../models/lotModel'

export const lotService = {
    getAllLots(){
        return axiosInstance.get<Array<lotModel>>(`Lot/getLots`);
    },
    getLotsBySubcategory(subcategoryId:string){
        return axiosInstance.get<Array<lotModel>>(`Lot/getLotsBySubcategory?subcategoryId=${subcategoryId}`);
    },
    getLotsByName(lotName:string){
        return axiosInstance.get<Array<lotModel>>(`Lot/getLotsByName?lotName=${lotName}`)
    }
}