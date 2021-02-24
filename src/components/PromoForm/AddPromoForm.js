import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPromo } from 'state/promo/promoActions';
import './addPromoForm.css';

const AddPromoForm = ({ enqueueSnackbar }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discountValue, setDiscountValue] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createPromo({
            title,
            description,
            discountValue : parseFloat(discountValue / 100),
            enqueueSnackbar
        }));
    } 
    

    return (
        <>
            <br/>
            <form id="addPromo" class="addPromoForm" onSubmit={handleSubmit}>

                <input type="text" name="title" id="title" placeholder="Nazwa promocji" required 
                onChange={(event) => setTitle(event.target.value)}/>
                {"Wartość zniżki: "}
                <input type="number" name="discountValue" id="discountValue" placeholder={1} required 
                onChange={(event) => setDiscountValue(event.target.value)}/> {"(%)"} <br/><br/>

                <textarea name="description" id="description" placeholder="Opis"
                onChange={(event) => setDescription(event.target.value)}></textarea>

                <button type="submit" id="addPromoBtn">Dodaj Promocję</button>
            </form>
        </>
    );
}

export default AddPromoForm;