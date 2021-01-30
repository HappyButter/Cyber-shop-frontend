import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateStorage, getAllProducts } from 'state/products/productActions';
import './addProductForm.css';

const ReduceStorageForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(0);
    
    const productEdit = useSelector(state => state.products.currentlyEdited);
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        setName(productEdit.name || '');
        setPrice(productEdit.price || 1);
    },[productEdit]);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = quantity > 0 
                      ? `Kupno produktu: ${name}`
                      : `Sprzedaż produktu: ${name}`

        const productsCost = -quantity * price;

        dispatch(updateStorage({
            id : productEdit.id,
            userId : auth.user.id,
            title,
            price,
            productsCost,
            shippmentPrice : 0,
            quantity : -quantity
        }));
        
        dispatch(getAllProducts());
    } 

    return (
        <>
            <br/>
            <h2><span class="productFormSpan">Aktualizacja stanu magazynowego produktu:</span></h2><br/>
            <form id="reduceStorageForm" class="reduceStorageForm" onSubmit={handleSubmit}>

                <h4 id="productName"><span class="productFormSpan">{name}</span></h4>
            
                <span class="productFormSpan">Dodaj/usuń z magazynu:</span>
                <input type="number" class="quantity" id="quantity" value={quantity} required onChange={(e) => setQuantity(e.target.value)}/>

                <br/>
                <span class="productFormSpan">Po cenie:</span>
                <input type="text" name="price" id="price" value={price} required 
                onChange={(event) => setPrice(event.target.value)}/> 
                <span class="productFormSpan">[zł]</span>
                <br/>
                <br/>
                {productEdit.id ? <button type="submit" id="updateStorageBtn">Aktualizuj</button> : null}
            </form>
        </>
    );
}

export default ReduceStorageForm;