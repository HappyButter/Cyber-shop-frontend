import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux';

import Row from './ProductListRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ProductList = () => {
    const classes = useStyles();
    const products = useSelector(state => state.products.allProducts);

    products.sort((a, b) => a.id - b.id);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Nazwa</TableCell>
                        <TableCell align="right">ID promocji</TableCell>
                        <TableCell align="right">Stan magazynowy</TableCell>
                        <TableCell align="right">Typ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { products.map(product => <Row productData={product}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductList;