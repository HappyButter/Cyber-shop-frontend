import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from './OrderProductListRow';
import { ProductListWrapper } from './orderProductList.css';

const OrderProductList = ({productList, auth, fulfilmentDate=null}) => {

    productList.sort((a, b) => a.id - b.id);

    return (
        <ProductListWrapper>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow key="head">
                            {
                                auth 
                                ? <TableCell>SERWIS</TableCell>
                                : null
                            }
                            <TableCell align="left">Nazwa</TableCell>
                            <TableCell align="right">Cena za sztuke</TableCell>
                            <TableCell align="center">Ilość</TableCell>
                            <TableCell align="right">Suma</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { productList.map(product => <Row productData={product} auth={auth} fulfilmentDate={fulfilmentDate} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </ProductListWrapper>
    );
}

export default OrderProductList;