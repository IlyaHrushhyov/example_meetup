import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {categoryService} from '../../../services/category-service'
import { useEffect, useState } from 'react';
import categoryModel from '../../../models/categoryModel';
import { Collapse, ListItemButton, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import subCategoryModel from '../../../models/subCategoryModel';

interface Props{
  categories: Array<categoryModel>,
  subCategories: Array<subCategoryModel>
}

const PinnedSubheaderList = (props: Props) => {

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

        {props.categories.map((item) => (
                <ListItem key={`listItem-${item.id}`}>
                  
                  <div>
                  <ListItemButton onClick={() => handleClick(item.id)}>
                    <ListItemText key={`listItemText-${item.id}`} primary={`${item.name}`}>
                    </ListItemText>
                  </ListItemButton>
                    {props.subCategories.map((subCategory) =>(
                      <Collapse in={openId === item.id} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
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