import { Grid, TextField } from '@mui/material';
import { useContext } from 'react';
import CategoryCtx from '../../contexts/CategoryContext';
import SubCategoryCtx from '../../contexts/SubCategoryContext';
import AllCategories from '../sidebar/SidebarList'

const CreateLot = () => {
    const {categories} = useContext(CategoryCtx);
    const {subCategories} = useContext(SubCategoryCtx);

    return (
        <>
            <Grid item xs={11}>
                <h1>Создание лота</h1>
                <h2>Фотографии</h2>
                <TextField label="Название товара" />
                <h2>Категория</h2>
                <AllCategories categories={categories} subCategories={subCategories}/>
            </Grid>
        </> 
    );
}

export default CreateLot;