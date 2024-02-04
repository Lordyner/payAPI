import React from 'react';
import classes from './PriceOptions.module.css';

const PriceOptions = ({ options }) => {



    return (
        <div className={classes.container}>
            <ul className={classes.options}>
                {options.map((option, index) => (
                    <li key={index} className={`${classes.option} ${option.active ? classes.active : ''}`}>{option.name}</li>
                ))
                }
            </ul>
        </div>
    );
};

export default PriceOptions;