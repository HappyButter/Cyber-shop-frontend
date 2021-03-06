import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Comments } from 'components';
import { useSnackbar } from 'notistack';
import { getProductDetails } from 'state/products/productActions';
import { addProductToCart } from 'state/cart/cartActions';
import { Paragraph, Btn } from './productDetails.css';
import { Middlepane } from 'styles/Middlepane.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CategoryIcon from '@material-ui/icons/Category';
import WatchIcon from '@material-ui/icons/Watch';
import ComputerIcon from '@material-ui/icons/Computer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Rating from '@material-ui/lab/Rating';


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    
    const productIcon = [
        <PhoneAndroidIcon style={{ fontSize: 200 }}/>,
        <WatchIcon style={{ fontSize: 200 }}/>,
        <CategoryIcon style={{ fontSize: 200 }}/>,
        <ComputerIcon style={{ fontSize: 200 }}/>
    ]

    useEffect( () => {
        window.scrollTo(0, 0);
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);

    const product = useSelector(status => status.products.productDetails);

    const handleAddToCart = (e) => {
        e.preventDefault();

        dispatch(addProductToCart({
            productId : product.id,
            productName : product.name,
            price : product.promo_id ? product.promo_price : product.price,
            enqueueSnackbar
        }))
    }

    return(
        <Middlepane>
            <br/><br/>
            { productIcon[product.category_id-1] || 
            <CategoryIcon style={{ fontSize: 200 }}/>}
            <br/><br/><hr/>

            <Paragraph>
                {product.name}
            </Paragraph>
            
            <Rating 
                    value={parseFloat(product.rating)}
                    readOnly
                    precision={0.5}
                    size="large" />
            <br/><br/>
            <h2>
                {product.promo_id 
                ? Number.parseFloat(product.promo_price).toFixed(2) + " zł" 
                : Number.parseFloat(product.price).toFixed(2) + " zł"}
            </h2>
            <Btn onClick={handleAddToCart}>
                <AddShoppingCartIcon/>
                {" "}
                Dodaj do koszyka
            </Btn>
            <br/><br/>
            <hr/>
            <div className="description">
                <br/>                        
                <Paragraph>Producent:</Paragraph>
                    {product.producer}
                    <Paragraph>Opis:</Paragraph>
                    {product.description}
                    <br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia optio quibusdam animi, similique nemo, corrupti adipisci exercitationem quas eligendi magni earum? Exercitationem incidunt similique ullam eius sunt architecto modi commodi illum, cumque veniam sequi? Illo recusandae eos laudantium ipsum nihil natus. Non ipsum ad, libero ab similique commodi voluptatem repellendus eius asperiores quaerat nobis accusantium. Facere veniam itaque impedit doloribus, minima labore sint quod voluptatibus beatae eaque quae exercitationem? Debitis sint neque minus ut amet ab veritatis, cum dolorum inventore unde facilis alias odit at, hic obcaecati numquam ea ratione omnis quo excepturi, beatae laborum. Laudantium consequuntur est atque nulla voluptatum sunt commodi quo quia placeat reprehenderit. Voluptatum, eaque. Consequuntur impedit officiis ab est ad veniam nam, praesentium tempore possimus maxime reiciendis, ipsum, distinctio autem. Soluta, temporibus blanditiis alias officia quibusdam expedita eius in labore? Delectus minus eveniet enim odio atque sapiente veniam provident distinctio officia repudiandae non numquam neque accusantium eum culpa, ea at. Praesentium, adipisci deleniti similique distinctio minus nemo quisquam facilis dolorem aperiam quo iusto dolore sapiente quod soluta magnam alias ex laborum qui ad aliquid nihil amet repudiandae voluptatibus debitis. Quisquam animi nulla veniam! Debitis perferendis, officia ratione dolores reiciendis quibusdam delectus quam. Recusandae esse voluptatum eaque voluptate ducimus quaerat at illo odio. Mollitia explicabo dolorum exercitationem rem pariatur incidunt voluptates. Asperiores reiciendis veritatis libero natus iure eveniet voluptates sunt culpa ea sint, eaque maxime quo in quisquam magni delectus illo facilis accusantium est mollitia officiis, itaque, quas adipisci beatae! Dolorem expedita sequi amet velit voluptatibus provident dolore explicabo quibusdam ab delectus, eaque tenetur iste ipsam mollitia, ex suscipit, at autem. Dignissimos natus, recusandae veniam hic maxime, modi amet officia rerum alias porro quis aperiam maiores beatae. Reprehenderit soluta, eum quidem perferendis natus assumenda doloremque libero sunt eius voluptatum animi suscipit, consequatur dolorum officia totam.
                <br/><br/>
            </div>
            <hr/>
            <br/><br/>
            <Comments productId={productId}/>
        </Middlepane> 
    )   
}

export default ProductDetails;