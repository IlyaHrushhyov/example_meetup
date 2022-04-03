import {useContext, useEffect, useState} from 'react'
import AllCategories from './SidebarList';
import Filter from './Filter';
import Select from './Select';
import { Wrapper, PriceWrapper } from './SideBar.styled';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import CategoryCtx from '../../contexts/CategoryContext';
import SubCategoryCtx from '../../contexts/SubCategoryContext';
import FilterContext from '../../contexts/FilterContext';
import {ConditionEnum} from '../../../enums/enums';
import RegionCtx from '../../contexts/RegionContext';
import CityCtx from '../../contexts/CityContext';
import regionModel from '../../../models/regionModel';
import cityModel from '../../../models/cityModel';
import {regionService} from '../../../services/region-service';
import { cityService } from '../../../services/city-service';

let qualities = ['Любое', 'Новое', 'Б/у'];
let name = 'Состояние';

const Sidebar = () => {
    
    const [cities, setCities] = useState<Array<cityModel>>([]);
    const [regions, setRegions] = useState<Array<regionModel>>([]);
    const {categories} = useContext(CategoryCtx);
    const {subCategories} = useContext(SubCategoryCtx);
    const {condition, setCondition, region, setRegion, city, setCity, priceFrom, setPriceFrom, priceUpTo, setPriceUpTo} = useContext(FilterContext);
    useEffect(()=>{
        regionService.getAllRegions().then((response)=>setRegions(response.data));
        cityService.getAllCities().then((response)=>setCities(response.data))
    },[])
    return (
    <Wrapper>
        <div>
            <FormLabel id="demo-row-radio-buttons-group-label">Все категории</FormLabel>
            <AllCategories categories={categories} subCategories={subCategories}/>
        </div>
        <div>
            <Select topicName='Регион' items={regions}/>
        </div>
        <div>
            <Select topicName='Город' items={cities}/>
        </div>
        <PriceWrapper>
            <TextField id="outlined-basic" label="Цена от" variant="outlined" type="number">
            </TextField>
            <TextField id="outlined-basic" label="Цена до" variant="outlined" type="number"/>
        </PriceWrapper>
        <div>
            <Filter elements={qualities} topicName={name}/>
        </div>
        <div>
            <Button className='button' variant="outlined">Показать результаты</Button>
        </div>
        <div>
            <Button className='button' variant="outlined" onClick={()=>{setCondition(ConditionEnum.Any); setRegion(''); setCity(''); setPriceFrom(''); setPriceUpTo('')}}>Сбросить фильтр</Button>
        </div>
    </Wrapper>
    );
}
 
export default Sidebar;