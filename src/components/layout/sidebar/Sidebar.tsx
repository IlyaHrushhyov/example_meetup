import {useContext} from 'react'
import AllCategories from './SidebarList';
import Filter from './Filter';
import Select from './Select';
import { Wrapper, PriceWrapper } from './SideBar.styled';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import CategoryCtx from '../../contexts/CategoryContext';
import SubCategoryCtx from '../../contexts/SubCategoryContext';

let qualities = ['Любое', 'Новое', 'Б/у'];
let name = 'Состояние';

const Sidebar = () => {
    const {categories} = useContext(CategoryCtx);
    const {subCategories} = useContext(SubCategoryCtx);

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
            <TextField id="outlined-basic" label="Цена от" variant="outlined" type="number">
            </TextField>
            <TextField id="outlined-basic" label="Цена до" variant="outlined" type="number"/>
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