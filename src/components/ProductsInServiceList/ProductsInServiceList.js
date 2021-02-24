import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from './ProductsInServiceRow';

const ProductsInServiceList = () => {
    const products = useSelector(state => state.productsInService.productList);
    
    products.sort((a, b) => a.id - b.id);

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow key="head">
                            <TableCell>Zamówienie</TableCell>
                            <TableCell align="left">Nazwa produktu</TableCell>
                            <TableCell align="center">Producent</TableCell>
                            <TableCell align="center">Stan magazynowy produktu</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Edytuj</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { products.map(product => 
                            <Row productData={product} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


export default ProductsInServiceList;