import { useDispatch } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import { Btn } from './orderProductList.css';

import { addProductToService } from 'state/productsService/productsServiceActions';

const Row = ({productData, auth, fulfilmentDate=null}) => {
    const dispatch = useDispatch();

    const handleBtnService = (e) => {
        e.preventDefault();
        if(fulfilmentDate){
            dispatch(addProductToService({ 
                orderLineId : productData.orderLineId,
                description : '',
                status : 'nowe' }))
        } else { 
            alert("Zamówienie musi być zrealizowane by dodać produkt do serwisu.")
        }


    } 

    return (
        <TableRow key={productData.id}>
            {
                auth 
                ? <TableCell align="center">
                        <Btn onClick={handleBtnService}>
                            <OfflineBoltIcon/>
                        </Btn>
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