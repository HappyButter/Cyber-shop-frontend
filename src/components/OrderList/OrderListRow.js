import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Link } from 'react-router-dom';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const Row = ({ rowData }) => {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const datePlaced = rowData.datePlaced.split('T')[0];

    return (
        <React.Fragment>
            <TableRow  className={classes.root} hover>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {rowData.title}
                </TableCell>
                <TableCell align="right">{datePlaced}</TableCell>
                <TableCell align="right">{rowData.email}</TableCell>
                <TableCell align="right">{rowData.productsCost + " zł"}</TableCell>
                
                {rowData.address_id !== null 
                    ? <>
                        <TableCell align="right">
                            { rowData.isPaid
                                ? <CheckCircleOutlineIcon />
                                : <HighlightOffIcon />
                            }
                        </TableCell>
                        <TableCell align="right">{rowData.orderStatus}</TableCell>

                        <TableCell align="right">
                            <IconButton aria-label="info">
                                <Link to={`/order/details/${rowData.order_id}`}>               
                                    <InfoRoundedIcon />
                                </Link>         
                            </IconButton>    
                        </TableCell>
                        </>
                    : <><TableCell/><TableCell/><TableCell/></>
                }

            </TableRow>

            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Zamówione produkty
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow >
                                        <TableCell>Nazwa</TableCell>
                                        <TableCell>Cena</TableCell>
                                        <TableCell align="right">Ilość</TableCell>
                                        <TableCell align="right">Suma</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowData.productList.map((product) => (
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                                {product.name}
                                            </TableCell>
                                            <TableCell>{product.pricePerItem + " zł"}</TableCell>
                                            <TableCell align="right">{product.quantity}</TableCell>
                                            <TableCell align="right">
                                                {parseFloat(product.quantity * product.pricePerItem).toFixed(2) + " zł"}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                        <br/>
                        <br/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default Row;