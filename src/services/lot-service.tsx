import {axiosInstance} from './service-base';
import lotModel from '../models/lotModel'

export const lotService = {
    getAllLots(){
        return axiosInstance.get<Array<lotModel>>(`Lot/getLots`);
    }
}