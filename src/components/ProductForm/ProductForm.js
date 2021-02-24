import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddProductForm from './AddProductForm';
import EditProductDetailsForm from './EditProductDetailsForm';
import ReduceStorageForm from './ReduceStorageForm';
import { useSnackbar } from 'notistack';

const ProductForm = ({ detailsFormOpen, setDetailsFromOpen }) => {
    
    const { enqueueSnackbar } = useSnackbar();
    
    return (
        <>
            <ButtonGroup disableElevation variant="contained" color="primary">
            
                <Button style={detailsFormOpen ? {background:'rgb(60, 78, 177)'} : {background:'rgba(60, 78, 177, 0.3)'}}
                        onClick={() => setDetailsFromOpen(false)}>
                            Dodaj nowy produkt
                </Button>
                <Button style={!detailsFormOpen ? {background:'rgb(60, 78, 177)'} : {background:'rgba(60, 78, 177, 0.3)'}}
                        onClick={() => setDetailsFromOpen(true)}
                        >Edytuj produkt
                </Button>
            
            </ButtonGroup>

            
            <hr/>
            {
                detailsFormOpen ? 
                    <>
                        <EditProductDetailsForm enqueueSnackbar={enqueueSnackbar}/>
                        <hr/>
                        <ReduceStorageForm enqueueSnackbar={enqueueSnackbar}/>
                    </> 
                    : <AddProductForm enqueueSnackbar={enqueueSnackbar}/>
            }
            <hr/>
        </>
    )
}

export default ProductForm;