import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch } from 'react-redux';
import { setToEditProduct } from 'state/products/productActions';

const Row = ({productData, setDetailsFromOpen}) => {
    const dispatch = useDispatch();

    const handleInfoBtn = () => {
        dispatch(setToEditProduct(productData));
        setDetailsFromOpen(true);
    }

    return (
        <TableRow hover key={productData.id}>
            <TableCell component="th" scope="row">
            {productData.id}
            </TableCell>
            <TableCell align="left">{productData.name}</TableCell>
            <TableCell align="right">{productData.promo_id}</TableCell>
            <TableCell align="right">{productData.inStock}</TableCell>
            <TableCell align="right">{productData.category_group}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="info"
                            onClick={handleInfoBtn}>
                    <InfoRoundedIcon style={{color: '#3f51b5'}}/>
                </IconButton>    
            </TableCell>
        </TableRow>
    );
}

export default Row;

