import { useDispatch } from 'react-redux';
import { setToEditProductInService } from 'state/productsService/productsServiceActions';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    color: darkgray;
    font-size: large;

    &:hover{
        background-color: blue;
    }
`

const Row = ({productData}) => {
    const dispatch = useDispatch();

    const handleInfo = (e) => {
        e.preventDefault();
        dispatch(setToEditProductInService({product:productData}));
    } 

    return (    
        <TableRow key={productData.id}>
            <TableCell component="th" scope="row">
            {productData.orderTitle}
            </TableCell>
            <TableCell align="left">{productData.productName}</TableCell>
            <TableCell align="center">{productData.producer}</TableCell>
            <TableCell align="center">{productData.inStock}</TableCell>
            <TableCell align="right">{productData.status}</TableCell>
            <TableCell align="right">
                <Btn onClick={handleInfo}>           
                    <EditIcon /> 
                </Btn>
            </TableCell>
        </TableRow>
    );
}

export default Row;