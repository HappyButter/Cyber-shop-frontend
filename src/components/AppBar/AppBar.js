import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import AdbIcon from '@material-ui/icons/Adb';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from 'state/auth/authActions';
import { clearCart } from 'state/cart/cartActions';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    maxWidth: '1200px',
  },
}));


const MenuAppBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const state = useSelector(state => state); 
  const count = state.cart.productList;
  const auth = state.auth;

  const dispatch = useDispatch();


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClick = (pageRoute) => {
    history.push(pageRoute);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    setAnchorEl(null);
    history.push('/');
  }
  
  const menuId = 'primary-search-account-menu';  
  const menuUserLoggedIn = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
    >
      { auth.isAdmin ? <MenuItem onClick={() => handleProfileMenuClick('/finaces')}>Finanse</MenuItem> : null }
      { auth.isAdmin ? <MenuItem onClick={() => handleProfileMenuClick('/products')}>Zarządzaj produkatami</MenuItem> : null }
      { auth.isAdmin ? <MenuItem onClick={() => handleProfileMenuClick('/management/promo')}>Zarządzaj promocjami</MenuItem> : null }
      { auth.isAdmin ? <MenuItem onClick={() => handleProfileMenuClick('/service')}>Zarządzaj serwisem</MenuItem> : null }
      <MenuItem onClick={() => handleProfileMenuClick('/orders')}>Zamówienia</MenuItem>
      <MenuItem onClick={() => handleProfileMenuClick('/account')}>Konto</MenuItem>
      <MenuItem onClick={() => handleLogout()}>Wyloguj</MenuItem>
    </Menu>
  );

  const menuUserLoggedOut = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={() => handleProfileMenuClick('/login')}>Zaloguj</MenuItem>
      <MenuItem onClick={() => handleProfileMenuClick('/register')}>Zarejestruj się</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleProfileMenuClick('/')}
          >
            <AdbIcon/>
            <Typography className={classes.title} variant="h6" noWrap>
            CyberShop
          </Typography>
          </IconButton>
          
          {/* Search bar has to be posponed */}
          
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="cart" 
                        color="inherit">
              <Badge badgeContent={count.length} color="secondary">
                <ShoppingCartIcon 
                onClick={() => handleProfileMenuClick('/cart')}/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.menuButton}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      { auth.isLoggedIn ? menuUserLoggedIn : menuUserLoggedOut }
    </div>
  );
}

export default withRouter(MenuAppBar);