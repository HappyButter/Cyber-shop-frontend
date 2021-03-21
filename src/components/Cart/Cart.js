import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeProductFromCart } from 'state/cart/cartActions';
import ControllQuantity from './ControllQuantity';

const columns = [
  {
    id: 'spanLeft',
    minWidth: 30
  },
  {
    id: 'name',
    label: 'Produkt',
    minWidth: 300
  },
  {
    id: 'price',
    label: 'Cena',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'quantity',
    label: 'Ilość',
    minWidth: 70,
    align: 'center',
  },
  {
    id: 'delete',
    minWidth: 70,
    align: 'right',
  },
  {
    id: 'spanRight',
    minWidth: 30
  },
];

const useStyles = makeStyles({
  container: {
    backgroundColor: 'gray',
  },
  head: {
    backgroundColor: 'gray',
  },
});

const Cart = ({ enqueueSnackbar }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.productList);
  const cartValue = useSelector(state => state.cart.value);
  cartItems.sort((a, b) => a.id - b.id);


  const handleCellType = (type, product) => {
    switch (type) {
      case 'quantity': {
        return <ControllQuantity
                  productId={product.id}
                  quantity={product.quantity}
                  enqueueSnackbar={enqueueSnackbar}
                />
      } case 'delete': {
        return <IconButton aria-label="info"                                         
                           onClick={ () => dispatch(removeProductFromCart({
                      productId: product.id,
                      enqueueSnackbar
                    }))}
                >
                    <DeleteIcon style={{color: 'darkgray', fontSize: 20}} />
                </IconButton> 
      } case 'price': {
        return product.price + " zł";
      }
      default:
        return product[type];
    }
  }

  return (
    <Paper>
      <TableContainer className={classes.container}>
        <Table stickyHeader >
          <TableHead  className={classes.head}>
            <TableRow key="main">
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <h4>{column.label}</h4>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((product) => {
              return (
                <TableRow key={product.id}>
                  {columns.map((column) => {
                    return (
                      <TableCell align={column.align}>
                        {handleCellType(column.id, product)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            <TableRow key="summary">
              <TableCell colSpan={4} align={'right'}>
                Suma
                </TableCell>
              <TableCell align={'center'}
                colSpan={2}>
                {parseFloat(cartValue).toFixed(2) + " zł"}
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Cart;