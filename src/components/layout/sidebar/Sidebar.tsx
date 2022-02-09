import { Box } from '@mui/system';
import Ract, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AllCategories from './SidebarList';
import Filter from './Filter';
import Select from './Select';
import { Wrapper, PriceWrapper } from './SideBar.styled';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import categoryModel from '../../../models/categoryModel';
import { categoryService } from '../../../services/category-service';
import subCategoryModel from '../../../models/subCategoryModel';
import {subCategoryService} from '../../../services/subCategory-service'

interface SidebarProps {
    
}

let qualities = ['Любое', 'Новое', 'Б/у'];
let name = 'Состояние';

const Sidebar: FC<SidebarProps> = () => {
    const [categories, setCategories] = useState<Array<categoryModel>>([]);
    const [subCategories, setSubCategories] = useState<Array<subCategoryModel>>([]);

    useEffect(() =>{
        Promise.all([ 
            subCategoryService.getAllSubCategories().then((response)=>setSubCategories(response.data)),
            categoryService.getAllCategories().then((response)=>setCategories(response.data))
        ])
    }, [])
    return (
    <Wrapper>
        <div>
            <FormLabel id="demo-row-radio-buttons-group-label">Все категории</FormLabel>
            <AllCategories categories={categories} subCategories={subCategories}/>
        </div>
        <div>
            <Select topicName='Регион'/>
        </div>
        <div>
            <Select topicName='Город'/>
        </div>
        <PriceWrapper>
            <TextField id="outlined-basic" label="Цена от" variant="outlined" />
            <TextField id="outlined-basic" label="Цена до" variant="outlined" />
        </PriceWrapper>
        <div>
            <Filter elements={qualities} topicName={name}/>
        </div>
        <div>
            <Button className='button' variant="outlined" >Показать результаты</Button>
        </div>
        <div>
            <Button className='button' variant="outlined" >Сбросить фильтр</Button>
        </div>
    </Wrapper>
    );
}
 
export default Sidebar;