import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import EditProductDetailsForm from './EditProductDetailsForm';
import ReduceStorageForm from './ReduceStorageForm';

const ProductForm = () => {
    const [isDetailsFormOpen, setIsDetailsFormOpen] = useState(false);

    return (
        <>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button onClick={() => setIsDetailsFormOpen(false)}>Dodaj nowy produkt</Button>
                <Button onClick={() => setIsDetailsFormOpen(true)}>Edytuj produkt</Button>
            </ButtonGroup>
            <hr/>
            {isDetailsFormOpen 
            ? <><EditProductDetailsForm/><hr/><ReduceStorageForm/></> 
            : <AddProductForm/>}
            <hr/>
        </>
    )
}

export default ProductForm;