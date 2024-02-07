import React from 'react';
import classes from './Client.module.css';
import ClientsLogo from './ClientsLogo';

const Client = () => {
    return (
        <section className={classes.clientSection}>
            <div className={`${classes.wrapper} max-width`}>
                <div className={classes.content}>
                    <h2>Who we work with</h2>
                    <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                    <button className='secondary-button-light'>About us</button>
                </div>
                <ClientsLogo color='white' />
            </div>
        </section>
    );
};

export default Client;