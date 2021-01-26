import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import AddPromoForm from './AddPromoForm';
import EditPromoForm from './EditPromoForm';

const PromoForm = () => {
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);

    return (
        <>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button onClick={() => setIsEditFormOpen(false)}>Dodaj nową promocję</Button>
                <Button onClick={() => setIsEditFormOpen(true)}>Edytuj istniejącą</Button>
            </ButtonGroup>
            <hr/>
            {isEditFormOpen ? <EditPromoForm/> : <AddPromoForm/>}
            <hr/>
        </>
    )
}

export default PromoForm;