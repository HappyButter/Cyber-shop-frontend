import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar, Comments } from '../../components';
import { getProductDetails } from 'state/products/productActions';
import { addProductToCart } from '../../state/cart/cartActions';
import { Paragraph } from './productDetails.css';
import { Middlepane } from 'styles/Middlepane.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CategoryIcon from '@material-ui/icons/Category';
import WatchIcon from '@material-ui/icons/Watch';
import ComputerIcon from '@material-ui/icons/Computer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const getProductIcon = (category) => {
        switch (category) {
            case 1:{
                return  <PhoneAndroidIcon style={{ fontSize: 200 }}/>;
            }case 2:{
                return  <WatchIcon style={{ fontSize: 200 }}/>;
            }case 3:{
                return  <CategoryIcon style={{ fontSize: 200 }}/>;
            }case 4:{
                return  <ComputerIcon style={{ fontSize: 200 }}/>;
            }default: {
                return <CategoryIcon/>;
            }
        }
    } 

    useEffect( () => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);

    const product = useSelector(status => status.products.productDetails);

    const handleAddToCart = (e) => {
        e.preventDefault();

        dispatch(addProductToCart({
            productId : product.id,
            productName : product.name,
            price : product.promo_id ? product.promo_price : product.price,
        }))
    }

    return(
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>

            <Middlepane>
                {getProductIcon(product.category_id)}
                <br/>
                <br/>
                <Paragraph>
                    {product.name}
                    <Rating 
                        value={parseFloat(product.rating)}
                        readOnly
                        precision={0.5}
                        size="large" />
                </Paragraph>

                <br/><br/>
                {product.promo_id 
                ? product.promo_price + " zł" 
                : product.price + " zł"}
                <IconButton
                    style={{ color: "green" }}
                    aria-label="open drawer"
                    onClick={handleAddToCart}
                    >
                     <AddShoppingCartIcon style={{ color: "green" }}/>
                    <Typography variant="h6" noWrap>
                    Dodaj do koszyka
                </Typography>
                </IconButton>
                <br/><br/>
                <hr/>
                <div className="description">
                    <br/><br/>  
                        {product.description}
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia optio quibusdam animi, similique nemo, corrupti adipisci exercitationem quas eligendi magni earum? Exercitationem incidunt similique ullam eius sunt architecto modi commodi illum, cumque veniam sequi? Illo recusandae eos laudantium ipsum nihil natus. Non ipsum ad, libero ab similique commodi voluptatem repellendus eius asperiores quaerat nobis accusantium. Facere veniam itaque impedit doloribus, minima labore sint quod voluptatibus beatae eaque quae exercitationem? Debitis sint neque minus ut amet ab veritatis, cum dolorum inventore unde facilis alias odit at, hic obcaecati numquam ea ratione omnis quo excepturi, beatae laborum. Laudantium consequuntur est atque nulla voluptatum sunt commodi quo quia placeat reprehenderit. Voluptatum, eaque. Consequuntur impedit officiis ab est ad veniam nam, praesentium tempore possimus maxime reiciendis, ipsum, distinctio autem. Soluta, temporibus blanditiis alias officia quibusdam expedita eius in labore? Delectus minus eveniet enim odio atque sapiente veniam provident distinctio officia repudiandae non numquam neque accusantium eum culpa, ea at. Praesentium, adipisci deleniti similique distinctio minus nemo quisquam facilis dolorem aperiam quo iusto dolore sapiente quod soluta magnam alias ex laborum qui ad aliquid nihil amet repudiandae voluptatibus debitis. Quisquam animi nulla veniam! Debitis perferendis, officia ratione dolores reiciendis quibusdam delectus quam. Recusandae esse voluptatum eaque voluptate ducimus quaerat at illo odio. Mollitia explicabo dolorum exercitationem rem pariatur incidunt voluptates. Asperiores reiciendis veritatis libero natus iure eveniet voluptates sunt culpa ea sint, eaque maxime quo in quisquam magni delectus illo facilis accusantium est mollitia officiis, itaque, quas adipisci beatae! Dolorem expedita sequi amet velit voluptatibus provident dolore explicabo quibusdam ab delectus, eaque tenetur iste ipsam mollitia, ex suscipit, at autem. Dignissimos natus, recusandae veniam hic maxime, modi amet officia rerum alias porro quis aperiam maiores beatae. Reprehenderit soluta, eum quidem perferendis natus assumenda doloremque libero sunt eius voluptatum animi suscipit, consequatur dolorum officia totam.
                    <br/><br/>
                </div>
                <hr/>
                <br/><br/>
                <Comments productId={productId}/> 

            </Middlepane> 
        </>
    )   
}

export default ProductDetails;