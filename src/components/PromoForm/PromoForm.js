import { useSnackbar } from 'notistack';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddPromoForm from './AddPromoForm';
import EditPromoForm from './EditPromoForm';

const PromoForm = ({ editFormOpen, setEditFormOpen }) => {
    
    const { enqueueSnackbar } = useSnackbar();

    return (
        <>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button style={editFormOpen ? {background:'rgb(60, 78, 177)'} : {background:'rgba(60, 78, 177, 0.3)'}}
                        onClick={() => setEditFormOpen(false)}>
                            Dodaj nową promocję
                </Button>
                <Button style={!editFormOpen ? {background:'rgb(60, 78, 177)'} : {background:'rgba(60, 78, 177, 0.3)'}}
                        onClick={() => setEditFormOpen(true)}
                        >
                            Edytuj istniejącą
                </Button>
            </ButtonGroup>

            <hr/>
            {
                editFormOpen 
                ? <EditPromoForm enqueueSnackbar={enqueueSnackbar}/> 
                : <AddPromoForm enqueueSnackbar={enqueueSnackbar}/>
            }
            <hr/>
        </>
    )
}

export default PromoForm;