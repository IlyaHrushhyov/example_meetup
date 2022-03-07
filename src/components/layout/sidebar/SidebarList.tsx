import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useContext, useState } from 'react';
import categoryModel from '../../../models/categoryModel';
import { Collapse, ListItemButton} from '@mui/material';
import subCategoryModel from '../../../models/subCategoryModel';
import CurrentSubCategoryCtx from '../../contexts/CurrentSubCategory';
import SearchContext from '../../contexts/SearchContext';

interface Props{
  categories: Array<categoryModel>,
  subCategories: Array<subCategoryModel>
}

const PinnedSubheaderList = (props: Props) => {
  const {setCurrentSubCategory, setCurrentSubCategoryText} = useContext(CurrentSubCategoryCtx);
  const {setSearchText} = useContext(SearchContext);
  const [openId, setOpenId] = useState<string>();

  const handleClick = (id: string ) => {
    (openId === id) ? setOpenId("0") : setOpenId(id);
  };

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
      >

        {props.categories.map((item: categoryModel) => (
                <ListItem key={`listItem-${item.id}`}>
                  <div>
                    <ListItemButton onClick={() => handleClick(item.id)}>
                      <ListItemText key={`listItemText-${item.id}`} primary={`${item.name}`}>
                      </ListItemText>
                    </ListItemButton>
                      {props.subCategories.map((subCategory: subCategoryModel) =>(
                            subCategory.categoryId === item.id &&
                              <Collapse in={openId === item.id} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  <ListItemButton sx={{ pl: 4 }} onClick={()=>{setCurrentSubCategory(subCategory.id); setCurrentSubCategoryText(subCategory.name);  setSearchText('')}}>
                                      <ListItemText key={`listItemText-${subCategory.id}`} primary={`${subCategory.name}`} />
                                  </ListItemButton>
                                </List>
                              </Collapse>
                      ))}
                  </div>
                </ListItem>
        ))}
      </List>
    </>
  );
}

export default PinnedSubheaderList;