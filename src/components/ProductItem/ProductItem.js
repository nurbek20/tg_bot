import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className}) => {

    // const onAddHandler = () => {
    //     onAdd(product);
    // }

    return (
        <div className={'product ' + className}>
            <img src={`${product.images[0].url}?w=120&h=120`} alt='Description_image' className={'img'}/>
            <div className={'title'}>{product.name}</div>
            <div className={'description'}>{product.descriptions}</div>
            <div className={'price'}>
                <span>Стоимость: <b> {product.variants[0].sale_price} рубль</b></span>
            </div>
            <Button className={'add-btn'} 
            // onClick={onAddHandler}
            >
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;
