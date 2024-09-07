import React from 'react';
import styles from './ProductCard.module.css';

// import iphone from '../../../Products/iPhone';
// import iwatch from '../../../Products/iWatch';

const ProductCard  = (props) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__items}>
                    <div className={styles.card__items_image}>
                        <img src={props.img} alt={props.name} />
                    </div>
                    <div className={styles.card__items_name}>
                        {props.name}
                    </div>
                    <div className={styles.card__items_price}>
                        {`${props.price} руб.`}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
