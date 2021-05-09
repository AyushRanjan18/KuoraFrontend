import React from 'react'
//import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';

import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import "./main.styles.css"
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
function Main () {

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
    return (
        <div>
            <div className="sidebar">
            <ListItem>
      <ListItemIcon>
        <MenuIcon className="x"/>
      </ListItemIcon>
      <ListItemText className="y" >Categories</ListItemText><ChevronLeftRoundedIcon className="x" />
    </ListItem>
    <Divider className="x"/>
            
            <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>       
      <ListItemIcon className="x">
        <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText >Academics</ListItemText>
    </ListItem>
    <ListItem button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Admissions" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Campus" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="COVID-19 Related" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Hostel" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Fee Structure" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Faculty" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Placement Cell" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Examinations" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 9}
          onClick={(event) => handleListItemClick(event, 9)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 10}
          onClick={(event) => handleListItemClick(event, 10)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Higher Studies" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === 11}
          onClick={(event) => handleListItemClick(event, 11)}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Foreign Student Exchange" />
    </ListItem>
        <Divider className="x"/>
        <div className="Logout">
    <ListItem button>
      <ListItemIcon className="x">
      <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    </div>
    </div>
    
        <div className="feed">
          Signed in as {localStorage.getItem('Name')}
        </div>
        </div>
    )
}

export default Main
