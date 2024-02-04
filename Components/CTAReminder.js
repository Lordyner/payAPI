import React from 'react';
import classes from './CTAReminder.module.css';

const CTAReminder = () => {
    return (
        <div className={classes.callToAction}>
            <h2>Ready to start?</h2>
            <div className={classes.component}>
                <input placeholder='Enter email address'></input>
                <button className='primary-button'>Schedule a demo</button>
            </div>
        </div>

    );
};
export default CTAReminder;
