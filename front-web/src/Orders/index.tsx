import './styles.css';
import './StepsHeader'
import StesHeader from './StepsHeader';
import ProductsList from './ProductList'
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    console.log(products);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div className="orders-container">
            <StesHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;