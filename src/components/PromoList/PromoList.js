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

import Row from './PromoListRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const PromoList = () => {
    const classes = useStyles();
    const promos = useSelector(state => state.promos.promosList)
    promos.sort((a, b) => a.id - b.id);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nazwa promocji</TableCell>
                        <TableCell align="right">Wartość zniżki</TableCell>
                        <TableCell align="right"></TableCell></TableRow>
                </TableHead>
                <TableBody>
                    { promos.map(promo => <Row promoData={promo}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PromoList;