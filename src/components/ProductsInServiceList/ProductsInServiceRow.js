import { useDispatch } from 'react-redux';
import { setToEditProductInService } from 'state/productsService/productsServiceActions';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const Row = ({ productData }) => {
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
                <IconButton aria-label="info"
                            onClick={handleInfo}>
                    <EditIcon style={{color:'#F08E02'}}/> 
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default Row;