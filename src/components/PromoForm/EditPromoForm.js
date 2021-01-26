import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editPromo, deletePromo } from 'state/promo/promoActions';
import './addPromoForm.css';

const EditPromoForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discountValue, setDiscountValue] = useState(1);

    const promoEdit = useSelector(state => state.promos.currentlyEdited);

    useEffect(() => {
        setTitle(promoEdit.title || '');
        setDescription(promoEdit.description || '');
        setDiscountValue(parseFloat(promoEdit.discount * 100) || 1);
    },[promoEdit]);

    const handleEdit = (e) => {
        e.preventDefault();
        
        dispatch(editPromo({
            id : promoEdit.id,
            title,
            description,
            discountValue : parseFloat(discountValue / 100)
        }));
    } 

    const handleDelete = (e) => {
        e.preventDefault();
        
        dispatch(deletePromo({
            id : promoEdit.id,
        }));
    } 
    
    const showBtns = () => {
        return (
            <> 
                <button id="updatePromoBtn" onClick={handleEdit}>Edytuj</button>
                {" "}
                <button id="deletePromoBtn" onClick={handleDelete}>Usuń</button>
            </>
        )
    }

    return (
        <div id="addPromo">
            <br/>

            <input type="text" name="title" id="title" value={title} required 
            onChange={(event) => setTitle(event.target.value)}/>
            
            {"Wartość zniżki: "}

            <input type="number" name="discountValue" id="discountValue" value={discountValue} required 
            onChange={(event) => setDiscountValue(event.target.value)}/> {"(%)"}

            <textarea name="description" id="description" value={description}
            onChange={(event) => setDescription(event.target.value)}></textarea>

            {promoEdit.id ? showBtns() : null}
            
        </div>
    );
}

export default EditPromoForm;