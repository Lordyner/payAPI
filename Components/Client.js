import React from 'react';
import classes from './Client.module.css';
import teslaLogo from '@/public/images/shared/desktop/tesla.svg';
import microsoftLogo from '@/public/images/shared/desktop/microsoft.svg';
import hewlettPackardLogo from '@/public/images/shared/desktop/hewlett-packard.svg';
import oracleLogo from '@/public/images/shared/desktop/oracle.svg';
import googleLogo from '@/public/images/shared/desktop/google.svg';
import nvidiaLogo from '@/public/images/shared/desktop/nvidia.svg';
import Image from 'next/image';

const Client = () => {
    return (
        <section className={classes.clientSection}>
            <div className={classes.content}>
                <h2>Who we work with</h2>
                <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                <button className='secondary-button-light'>About us</button>
            </div>
            <div className={classes.clientsLogoWrapper}>
                <Image src={teslaLogo} alt='tesla logo' />
                <Image src={microsoftLogo} alt='microsoft logo' />
                <Image src={hewlettPackardLogo} alt='hewlett packard logo' />
                <Image src={oracleLogo} alt='oracle logo' />
                <Image src={googleLogo} alt='google logo' />
                <Image src={nvidiaLogo} alt='nvidia logo' />
            </div>

        </section>
    );
};

export default Client;