import { useState } from 'react';
import { addProductToCart,
         reduceProductQuantityFromCart} from 'state/cart/cartActions';
    
import { useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const ControllQuantity = ({productId, quantity, enqueueSnackbar}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(quantity);

    return (
          <>
                <IconButton aria-label="info" 
                            onClick={ () => {
                                            dispatch(reduceProductQuantityFromCart({
                                                productId,
                                                enqueueSnackbar
                                            }));
                                            setCount(count-1);
                            }}
                >
                    <RemoveIcon style={{color: 'darkgray', fontSize: 20}} />
                </IconButton>  

                {count}
                
                <IconButton aria-label="info"                                         
                            onClick={ () => {
                                dispatch(addProductToCart({
                                    productId,
                                    enqueueSnackbar
                                }));
                                setCount(count+1);
                            }}
                >
                    <AddIcon style={{color: 'darkgray', fontSize: 20}} />
                </IconButton> 
          </>
      )
}

export default ControllQuantity;