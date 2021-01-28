import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { DetailsWrapper } from './orderAddressDetails.css';


const OrderAddressDetails = ({orderData}) => {

    return (
        <DetailsWrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        name="name"
                        fullWidth
                        id="name"
                        label="Imię"
                        variant="outlined"
                        value={orderData.userName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled
                        fullWidth
                        id="lastName"
                        label="Nazwisko"
                        name="lastName"
                        variant="outlined"
                        value={orderData.userSurname}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        disabled
                        fullWidth
                        name="email"
                        label="Email"
                        id="email"
                        variant="outlined"
                        value={orderData.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        disabled
                        fullWidth
                        name="phoneNumber"
                        label="Numer telefonu"
                        id="phoneNumber"
                        variant="outlined"
                        value={orderData.phoneNumber}
                    />
                </Grid>
            </Grid>

            <br/>    
            <hr/>
            <br/>

            <Grid container spacing={2}>
                <Grid item xs={12}  sm={6}>
                    <TextField
                        disabled
                        fullWidth
                        name="country"
                        label="Państwo"
                        id="country"
                        variant="outlined"
                        value={orderData.country}
                    />
                </Grid>

                <Grid item xs={12}  sm={6}>
                    <TextField
                        disabled
                        fullWidth
                        name="postcode"
                        label="Kod pocztowy"
                        id="postcode"
                        variant="outlined"
                        value={orderData.postCode}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        disabled
                        fullWidth
                        name="city"
                        label="Miejscowość"
                        id="city"
                        variant="outlined"
                        value={orderData.city}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        disabled
                        fullWidth
                        name="street"
                        label="Ulica"
                        id="street"
                        variant="outlined"
                        value={orderData.street}
                    />
                </Grid>

                <Grid item xs={12}  sm={6}>
                    <TextField
                        disabled
                        fullWidth
                        name="building"
                        label="Nr budynku"
                        id="building"
                        variant="outlined"
                        value={orderData.building}
                    />
                </Grid>

                <Grid item xs={12}  sm={6}>
                    <TextField
                        disabled
                        fullWidth
                        name="apartment"
                        label="Nr lokalu"
                        id="apartment"
                        variant="outlined"
                        value={orderData.apartment}
                    />
                </Grid>
            </Grid>

            <br/>    
            <hr/>
            <br/>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                        disabled
                        fullWidth
                        name="datePlaced"
                        label="Data złożenia"
                        id="datePlaced"
                        variant="outlined"
                        value={orderData.datePlaced.split('T')[0]}
                    />
                </Grid>

                {
                    orderData.dateFulfillment 
                    ? <Grid item xs={12}>
                        <TextField
                            disabled
                            fullWidth
                            name="phoneNumber"
                            label="Numer telefonu"
                            id="phoneNumber"
                            variant="outlined"
                            value={orderData.dateFulfillment.split('T')[0]}
                        />
                    </Grid> 
                    : null
                }

            </Grid>
            <br/>    
            <hr/>
            <br/>
            <h3>Komentarz do zamówienia:</h3>
            <h4>{orderData.clientComments}</h4>
        </DetailsWrapper>
    );
}

export default OrderAddressDetails;