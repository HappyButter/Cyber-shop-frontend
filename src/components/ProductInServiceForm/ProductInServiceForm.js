import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProductStatusInService } from 'state/productsService/productsServiceActions';
import './productsInServiceForm.css';


const ProductInServiceForm = () => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    const serviceEdit = useSelector(state => state.productsInService.currentlyEdit);

    useEffect(() => {
        setStatus(serviceEdit.status || '');
        setDescription(serviceEdit.description || '');
    },[serviceEdit]);

    const handleEdit = (e) => {
        e.preventDefault();
        
        dispatch(updateProductStatusInService({ 
            serviceId : serviceEdit.id,
            description,
            status 
        }));
    } 
    
    const showBtns = () => {
        return (
            <> 
                <button id="updateServiceBtn" onClick={handleEdit}>Aktualizuj</button>
            </>
        )
    }

    return (
        <div id="updateService">
            <br/>
            <h4>Status: </h4>
            <input type="text" name="serviceStatus" id="serviceStatus" value={status} required 
            onChange={(event) => setStatus(event.target.value)}/>
            
            <h4>Opis usterki:</h4>
            <textarea name="serviceDescription" id="serviceDescription" value={description}
            onChange={(event) => setDescription(event.target.value)}></textarea>

            {serviceEdit.id ? showBtns() : null}
            
        </div>
    );
}

export default ProductInServiceForm;