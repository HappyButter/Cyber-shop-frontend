import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch } from 'react-redux';
import { getPromoProducts,  } from 'state/products/productActions';
import { setToEdition } from 'state/promo/promoActions';

const Row = ({promoData}) => {
    const dispatch = useDispatch();

    const handleInfoBtn = () => {
        dispatch(getPromoProducts(promoData.id));
        dispatch(setToEdition(promoData));
    }

    return (
        <TableRow hover key={promoData.title}>
            <TableCell component="th" scope="row">
            {promoData.title}
            </TableCell>
            <TableCell align="right">{parseFloat(promoData.discount * 100) + "%"}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="info"
                            onClick={handleInfoBtn}>
                    <InfoRoundedIcon />
                </IconButton>    
            </TableCell>
        </TableRow>
    );
}

export default Row;

