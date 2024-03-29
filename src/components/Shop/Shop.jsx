import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getShoppingCart }from '../../utilities/fakedb'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
   useEffect(()=>{
    const storedCart= getShoppingCart();
    const saveCart =[]
    // stape 1 :get id of the addsdprodact
    for(const id in storedCart){
        // stap 2:get product from products state by using id
     const addedProduct=products.find(product=>product.id ===id)
     if(addedProduct){
        // stap 3:add quantity
        const quantity=storedCart[id]
        addedProduct.quantity =quantity;
        // stap 4:add the added product to the save cart
        saveCart.push(addedProduct)
     }
    
    }
    // stap:5 set the cart 
   setCart(saveCart);
   },[products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* {cart.length} */}
                <Cart cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;