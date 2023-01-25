import { useContext } from 'react';
import { ProductContext } from '../../contexts/products.context';
import ProductCard from '../Product-card/ProductCard';
import './Shop.styles.scss'

 const Shop = ()=>{
    const {products} =useContext(ProductContext);
    return(
        <div className='product-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
            }
        </div>
    )
}
export default Shop;