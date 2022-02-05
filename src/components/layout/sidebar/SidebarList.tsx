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

export default function PinnedSubheaderList(props: Props) {

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
        // subheader={<li />}
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     {/* Nested List Items */}
        //   </ListSubheader>
        // }
      >

        {props.categories.map((item) => (
          //<li key={`li-${item.id}`}>
                <ListItem key={`listItem-${item.id}`} onClick={() =>handleClick(item.id)}>
                  <ListItemButton>
                  <div>
                    <ListItemText key={`listItemText-${item.id}`} primary={`${item.name}`}>

                    </ListItemText>
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
                  </ListItemButton>
                 
                </ListItem>
          //</li>
        ))}
      </List>
    </>
  );
}

