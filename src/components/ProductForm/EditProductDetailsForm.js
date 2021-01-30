import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { updateProduct } from 'state/products/productActions';
import './addProductForm.css';

const EditProductDetailsForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0.0);
    const [profitMargin, setProfitMargin] = useState(1)
    const [producer, setProducer] = useState('');
    const [warranty, setWarranty] = useState(1);
    const [promo_id, setPromo_id] = useState(-1);
    const [category_id, setCategory_id] = useState(1);

    
    const productEdit = useSelector(state => state.products.currentlyEdited)
    const categories = useSelector(state => state.categories.categoriesList);
    const promos = useSelector(state => state.promos.promosList);


    useEffect(() => {
        setName(productEdit.name || '');
        setDescription(productEdit.description || '');
        setPrice(productEdit.price || 1);
        setProfitMargin(parseFloat(productEdit.profit_margin * 100) || 1);
        setProducer(productEdit.producer || '');
        setWarranty(productEdit.warranty || 1);
        setPromo_id(productEdit.promo_id || -1);
        setCategory_id(productEdit.category_id || 1);
    },[productEdit]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(updateProduct({
            id : productEdit.id,
            name,
            description, 
            price,
            profitMargin :  parseFloat(profitMargin / 100),  
            producer, 
            warranty, 
            promo_id : (promo_id === -1 ? null : promo_id), 
            category_id
        }));
    } 

    return (
        <>
            <br/>
            <h2><span class="productFormSpan">Aktualizacja danych produktu:</span></h2>
            <form id="addProductForm" class="addProductForm" onSubmit={handleSubmit}>
                
                <h4 id="productName"><span class="productFormSpan">{name}</span></h4>
                <h4 id="productName"><span class="productFormSpan">{producer}</span></h4>
                

                <span class="productFormSpan">Cena:</span>
                <input type="text" name="price" id="price" value={price} required 
                onChange={(event) => setPrice(event.target.value)}/> 
                <span class="productFormSpan">[zł]</span>

                <br/>
                <span class="productFormSpan">Marża:</span>
                <input type="number" name="profitMargin" id="profitMargin" value={profitMargin} required 
                onChange={(event) => setProfitMargin(event.target.value)}/> 
                <span class="productFormSpan">[%]</span>

                <textarea name="description" id="description" value={description}
                onChange={(event) => setDescription(event.target.value)}></textarea>

                <span class="productFormSpan">Długość gwarancji:</span>
                <input type="number" name="warranty" id="warranty" value={warranty} required 
                onChange={(event) => setWarranty(event.target.value)}/>
                <span class="productFormSpan">[w miesiącach]</span> 

                <br/><br/>
                Promocja:
                <Grid container id="promoId">
                    <Grid item xs={12}>
                        <Select
                        style={{background:'rgb(60, 78, 177)'}}
                        labelId="promoId-label"
                        fullWidth
                        value={promo_id}
                        onChange={e => setPromo_id(e.target.value)}
                        >
                            <MenuItem value={-1}>Brak</MenuItem>
                            {promos.map(promo => <MenuItem value={promo.id}>{promo.title}</MenuItem>)}
                        </Select>
                    </Grid>
                </Grid>


                <br/>
                Kategoria:
                <Grid container id="categoryId">
                    <Grid item xs={12}>
                        <Select
                        style={{background:'rgb(60, 78, 177)'}}
                        labelId="categoryId-label"
                        fullWidth
                        value={category_id}
                        onChange={e => setCategory_id(e.target.value)}
                        >
                            {categories.map(cat => <MenuItem value={cat.id}>{cat.category_name + ", " + cat.category_group}</MenuItem>)}
                        </Select>
                    </Grid>
                </Grid>
                <br/>
                {productEdit.id ? <button type="submit" id="updateProductBtn">Edytuj</button> : null}
            </form>
        </>
    );
}

export default EditProductDetailsForm;