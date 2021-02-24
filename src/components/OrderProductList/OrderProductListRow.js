import { useDispatch } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import IconButton from '@material-ui/core/IconButton';
import { addProductToService } from 'state/productsService/productsServiceActions';

const Row = ({ productData, auth, fulfilmentDate=null, enqueueSnackbar }) => {
    const dispatch = useDispatch();

    const handleBtnService = (e) => {
        e.preventDefault();
        if(fulfilmentDate){
            dispatch(addProductToService({ 
                orderLineId : productData.orderLineId,
                description : '',
                status : 'nowe',
                enqueueSnackbar }))
        } else { 
            enqueueSnackbar('Zamówienie musi być zrealizowane by dodać produkt do serwisu', {variant: 'warning'})
        }    
    } 

    return (
        <TableRow key={productData.id}>
            {
                auth 
                ? <TableCell align="center">
                        <IconButton onClick={handleBtnService}>
                            <OfflineBoltIcon style={{color: '#F02416'}}/>
                        </IconButton>
                  </TableCell>
                : null
            }
                
            <TableCell component="th" scope="row">
                {productData.name}
            </TableCell>
            <TableCell align="right">{productData.pricePerItem + " zł"}</TableCell>
            <TableCell align="center">{productData.quantity}</TableCell>
            <TableCell align="right">
                {parseFloat(productData.quantity * productData.pricePerItem).toFixed(2) + " zł"}
            </TableCell>
        </TableRow>
    )
} 

export default Row;