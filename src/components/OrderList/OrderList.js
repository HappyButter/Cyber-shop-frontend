import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux';
import Row from './OrderListRow';

const OrderList = () => {
    const orders = useSelector(state => state.orders); 

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Tytuł</TableCell>
                        <TableCell align="right">Data złożenia</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Wartość</TableCell>
                        <TableCell align="right">Opłacone</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <Row rowData={order} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrderList;