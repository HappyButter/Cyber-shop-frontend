import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { updatePaymentStatus, updateOrderStatus } from 'state/orders/ordersActions';
import { EditBtn, PaymentStatusWrapper } from './paymentStatus.css';




const orderStatusList = [
    {
        key : 1,
        value : "nowe"
    },
    {
        key : 2,
        value : "przyjete"
    },
    {
        key : 3,
        value : "pakowane"
    },
    {
        key : 4,
        value : "wyslane"
    },
    {
        key : 5,
        value : "zrealizowane"
    },
    {
        key : 6,
        value : "anulowane"
    }
]

const PaymentStatus = ({orderId, auth}) => {
    const dispatch = useDispatch();

    const [isPaid, setIsPaid] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderStatus, setOrderStatus] = useState(orderStatusList[0].key);

    const currentlyWatched = useSelector(state => 
        state.orders.find(order => 
            parseInt(order.order_id) === parseInt(orderId)
        )
    ); 

    useEffect(() => {
        setIsPaid(currentlyWatched.isPaid || false);
        setPaymentMethod(currentlyWatched.paymentMethod || '');
    }, [currentlyWatched]);


    const orderStatusTranslator = (k) => {
        const res = orderStatusList.find(stat => stat.key === k);
        return res.value;
    }

    const handlePaymentSubmit = (e) => {
        e.preventDefault();

        if(currentlyWatched.isPaid !== isPaid){
            dispatch(updatePaymentStatus({isPaid, orderId}));
        }
    } 

    const handleStatus = (e) => {
        e.preventDefault();

        const status = orderStatusTranslator(orderStatus);

        if(currentlyWatched.orderStatus !== status){
            dispatch(updateOrderStatus({status, orderId}));
        }
    } 

    // admin features
    const handlePayment = () => {
        return (
        <>
            <h4>Czy zapłacone:</h4>
            <form onSubmit={handlePaymentSubmit}>
                <Select
                labelId="payment-label"
                id="payment"
                fullWidth
                value={isPaid}
                onChange={e => setIsPaid(e.target.value)}
                >
                <MenuItem value={true}>Zapłacono</MenuItem>
                <MenuItem value={false}>Nie zapłacono</MenuItem>
                </Select>
                <br/><br/>
                <EditBtn type="submit">
                    Zmień
                </EditBtn>
            </form>
        </>)
    }

    const handleOrderStatus = () => {
        return (
        <>
            <h4>Status zamówienia:</h4>
            <form onSubmit={handleStatus}>
                <Select
                labelId="orderStatus-label"
                id="orderStatus"
                fullWidth
                value={orderStatus}
                onChange={e => setOrderStatus(e.target.value)}
                >
                    {orderStatusList.map(status => <MenuItem value={status.key}>{status.value}</MenuItem>)}
                </Select>
                <br/><br/>
                <EditBtn type="submit">
                    Zmień
                </EditBtn>
            </form>
        </>)
    }


    // normal user features
    const basicUserPayment = () => {
        return ( 
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <br/>
                    <TextField
                        disabled
                        fullWidth
                        name="isPaid"
                        label="Czy zapłacone?"
                        id="isPaid"
                        variant="outlined"
                        value={isPaid ? 'zapłacone' : 'nie zapłacone'}
                    />
                </Grid> 
            </Grid>
        )
    }

    const basicUserOrderStatus = () => {
        return ( 
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <br/>
                    <TextField
                        disabled
                        fullWidth
                        name="orderStatus"
                        label="Status zamówienia"
                        id="orderStatus"
                        variant="outlined"
                        value={orderStatusTranslator(orderStatus)}
                    />
                </Grid> 
            </Grid>
        )
    }


    return (
        <PaymentStatusWrapper>
            <h3>Status płatności</h3>
            <hr/>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        disabled
                        fullWidth
                        name="paymentMethod"
                        label="Metoda płatności"
                        id="paymentMethod"
                        variant="outlined"
                        value={paymentMethod}
                    />
                </Grid> 
            </Grid>
            <br/>
            <hr/>
            {auth ? handlePayment() : basicUserPayment()}
            <br/>
            <hr/>
            {auth ? handleOrderStatus() : basicUserOrderStatus()}

        </PaymentStatusWrapper>
    )
}

export default PaymentStatus;