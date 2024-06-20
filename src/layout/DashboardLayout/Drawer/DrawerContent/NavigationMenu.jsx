import React, { useMemo, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { RichTreeView } from '@mui/x-tree-view';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { DownOutlined, HomeOutlined, LoginOutlined, StarOutlined, StarTwoTone, ToolOutlined, UpOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Define the menu data with 3 levels of depth
// Navigation : Dashboard
// Authentication : Login, Register
// Utilities : Typhography, Color, Shadow
// Support : Sample Page, Play Page, Example Page, Documentation
const menuData = [
  {
    title: 'Navigation',
    path: '',
    icon: <HomeOutlined />,
    depth: 0,
    items: [
      {
        title: 'Dashboard',
        path: '/',
        icon: null,
        depth: 1,
        items: []
      }
    ]
  },
  {
    title: 'Authentication',
    path: '',
    icon: <LoginOutlined />,
    depth: 0,
    items: [
      {
        title: 'Login',
        path: '/login',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Register',
        path: '/register',
        icon: null,
        depth: 1,
        items: []
      }
    ]
  },
  {
    title: 'Utilities',
    path: '',
    icon: <ToolOutlined />,
    depth: 0,
    items: [
      {
        title: 'Typography',
        path: '/typography',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Color',
        path: '/color',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Shadow',
        path: '/shadow',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Test',
        path: '',
        icon: null,
        depth: 1,
        items: [
          {
            title: 'Web Development',
            path: '',
            icon: null,
            depth: 2,
            items: []
          },
          {
            title: 'Mobile Development',
            path: '',
            icon: null,
            depth: 2,
            items: [
              {
                title: 'iOS',
                path: '',
                icon: null,
                depth: 3,
                items: []
              },
              {
                title: 'Android',
                path: '',
                icon: null,
                depth: 3,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Support',
    path: '',
    icon: <StarOutlined />,
    depth: 0,
    items: [
      {
        title: 'Sample Page',
        path: '/sample-page',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Play Page',
        path: '/play-page',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Example Page',
        path: '/example-page',
        icon: null,
        depth: 1,
        items: []
      },
      {
        title: 'Documentation',
        path: '',
        icon: null,
        depth: 1,
        items: []
      }
    ]
  }
];

// MenuItem component
const MenuItem = ({ item, onClick, expandedItems }) => {
  const isExpanded = expandedItems.includes(item.title);
  const px = useMemo(() => item.depth + 1);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path, { state: { val: 'test' } });
    }
  };

  return (
    <>
      <ListItem button onClick={() => onClick(item.title)}>
        {item.icon}
        <ListItemText primary={item.title} sx={{ paddingLeft: px }} onClick={() => handleMenuClick(item)} />
        {item.items.length > 0 ? isExpanded ? <UpOutlined /> : <DownOutlined /> : null}
      </ListItem>
      {item.items.length > 0 && (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.items.map((subItem) => (
              <MenuItem key={subItem.title} item={subItem} onClick={onClick} expandedItems={expandedItems} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

// Menu component
const Menu = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleClick = (title) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]));
  };

  return (
    <>
      {/* {JSON.stringify(expandedItems)} */}
      <List>
        {data.map((item) => (
          <MenuItem key={item.title} item={item} onClick={handleClick} expandedItems={expandedItems} />
        ))}
      </List>
    </>
  );
};

function NavigationMenu() {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <Menu data={menuData} />
    </Box>
  );
}

export default NavigationMenu;
