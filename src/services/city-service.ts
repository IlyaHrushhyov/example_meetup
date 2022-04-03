import cityModel from '../models/cityModel';
import {axiosInstance} from './service-base';

export const cityService = {
    getAllCities(){
        return axiosInstance.get<Array<cityModel>>(`City/getCities`);
    },
    getCitiesByRegion(){
        return axiosInstance.get<Array<cityModel>>(`City/getCitiesByRegion`);
    }
}