import React  from 'react';
import { useSelector } from 'react-redux';
import { CategoriesBar, AppBar, PaymentStatus, OrderAddressDetails, OrderProductList } from 'components';
import { Middlepane } from 'styles/Middlepane.css';
import { ContentLeft, ContentMid, ContentRight, Paragraph } from './orderDetails.css';
import { useParams } from 'react-router-dom';


const OrderDetails = () => {
    const { id } = useParams();
    
    const auth = useSelector(state => state.auth);
    const order = useSelector(state => 
        state.orders.find(order => 
            parseInt(order.order_id) === parseInt(id)
        )
    );

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <Paragraph>{order.title}</Paragraph>
                <hr/>
                <br/>
                <ContentLeft>
                    <OrderAddressDetails orderData={order}/>
                </ContentLeft>
                <ContentMid>
                    <OrderProductList productList={order.productList} auth={auth.isAdmin}/>
                    <br/>
                    <hr/>
                    <h2>
                    Przesyłka:
                    {" " + (parseFloat(order.shippmentPrice)).toFixed(2) + " zł"}
                    </h2>
                    <h2>
                    Produkty:
                    {" " + (parseFloat(order.productsCost)).toFixed(2) + " zł"}
                    </h2>
                    <hr/>
                    <br/>
                    <h2>
                    Suma:
                    {" " + (parseFloat(order.productsCost) + parseFloat(order.shippmentPrice)).toFixed(2) + " zł"}
                    </h2>
                    <br/>
                    <hr/>
                </ContentMid> 
                <ContentRight>
                    <PaymentStatus orderId={id} auth={auth.isAdmin}/>
                </ContentRight>
            </Middlepane>
        </>
    );
}

export default OrderDetails;