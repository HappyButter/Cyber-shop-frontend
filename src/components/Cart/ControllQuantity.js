import { useState } from 'react';
import { addProductToCart,
         reduceProductQuantityFromCart} from 'state/cart/cartActions';
    
import { useDispatch } from 'react-redux';
import { Btn, ControllBtn } from './cart.css';

const ControllQuantity = ({productId, quantity, enqueueSnackbar}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(quantity);

    return (
          <>
              <Btn type="button" 
                    value="-" 
                    className="minus"
                    onClick={ e => {
                        dispatch(reduceProductQuantityFromCart({
                            productId,
                            enqueueSnackbar
                        }));
                        setCount(count-1);
                    }
                }
                >-</Btn>
                    
                {count}
                    
              <ControllBtn type="button" 
                    className="plus"
                    onClick={ e => {
                        dispatch(addProductToCart({
                            productId,
                            enqueueSnackbar
                        }));
                        setCount(count+1);
                    }
                }
                >+</ControllBtn>
          </>
      )
}

export default ControllQuantity;