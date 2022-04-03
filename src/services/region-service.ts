import {axiosInstance} from './service-base';
import regionModel from '../models/regionModel'

export const regionService = {
    getAllRegions(){
        return axiosInstance.get<Array<regionModel>>(`Region/getRegions`);
    }
}