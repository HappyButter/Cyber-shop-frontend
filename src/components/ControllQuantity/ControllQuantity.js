import { useState } from 'react';
import { addProductToCart,
         reduceProductQuantityFromCart} from 'state/cart/cartActions';
    
import { useDispatch } from 'react-redux';

const ControllQuantity = ({productId, quantity}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(quantity);

    return (
          <>
              <input type="button" 
                    value="-" 
                    class="minus"
                    onClick={ e => {
                        dispatch(reduceProductQuantityFromCart({
                            productId
                        }));
                        setCount(count-1);
                    }
                }
                />
              <input type="number" 
                    step="1" 
                    min="1" 
                    name="quantity" 
                    value={count} 
                    title="Qty" 
                    class="input-text qty text"
                    size="4"
                    pattern=""
                    inputmode=""/>
              <input type="button" 
                    value="+" 
                    class="plus"
                    onClick={ e => {
                        dispatch(addProductToCart({
                            productId
                        }));
                        setCount(count+1);
                    }
                }
                />
          </>
      )
}

export default ControllQuantity;