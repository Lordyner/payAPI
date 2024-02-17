import React from 'react';
import classes from './CTAReminder.module.css';

const CTAReminder = ({ padding, maxWidth }) => {
    return (
        <div className={`${classes.callToAction} ${padding} ${maxWidth ? 'max-width' : ''}`}>
            <div className={classes.wrapper}>
                <h2>Ready to start?</h2>
                <div className={classes.component}>
                    <input placeholder='Enter email address'></input>
                    <button className='primary-button'>Schedule a demo</button>
                </div>
            </div>
        </div>

    );
};
export default CTAReminder;

