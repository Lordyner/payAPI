import React from 'react';
import classes from './PricePlan.module.css';
import PriceOptions from './PriceOptions';

const PricePlan = ({ name, description, price, options }) => {
    return (
        <div className={classes.pricePlan}>
            <h2>{name}</h2>
            <p>{description}</p>
            <span className={classes.price}>${price}</span>
            <PriceOptions options={options} />
            <button className='secondary-button-dark'>Request Access</button>
        </div>
    );
};

export default PricePlan;