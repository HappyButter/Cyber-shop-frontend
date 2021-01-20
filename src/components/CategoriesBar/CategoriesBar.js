import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomIconButton, CustomAppBar} from './categoriesBar.css';
import Toolbar from '@material-ui/core/Toolbar';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import ComputerIcon from '@material-ui/icons/Computer';
import MemoryIcon from '@material-ui/icons/Memory';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const CategoriesBar = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomAppBar position="static" >
        <Toolbar>
          <CustomIconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => history.push('/offer/1')}
          >
              <ComputerIcon/> Laptopy i komputery 
          </CustomIconButton>
          
          <CustomIconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => history.push('/offer/2')}
            >
              <SmartphoneIcon/> Smartfony i smartwatche 
          </CustomIconButton>
          
          <CustomIconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => history.push('/offer/3')}
            >
              <MemoryIcon/> Podzespoły komputerowe 
          </CustomIconButton>
        </Toolbar>
      </CustomAppBar>
    </div>
  );
}

export default withRouter(CategoriesBar);