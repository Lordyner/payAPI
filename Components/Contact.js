import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './Contact.module.css';

import ClientsLogo from './ClientsLogo';

const Contact = () => {

    const form = useRef();
    const [receiveCompanyAnnouncements, setReceiveCompanyAnnouncements] = useState(false);

    return (
        <div className={`${classes.container} max-width`}>
            <div className={classes.formWrapper}>
                <h1>Submit a help request and we’ll get in touch shortly.</h1>
                <form ref={form} className={classes.form}>
                    <div className={classes.fieldsWrapper}>
                        <div className={classes.formGroup}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' placeholder='Name' required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email' name='email' id='email' placeholder='Email Address' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
                            <div className={classes.errorMessageMail}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='companyName'>Company Name</label>
                            <input type='text' name='companyName' id='companyName' placeholder='Company Name' required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' id='title' placeholder='Title' required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='message'>Message</label>
                            <textarea type='textarea' id='message' name='message' placeholder='Message' rows={8} required />
                            <div className={classes.errorMessage}></div>
                        </div>
                        <label className={classes.checkBoxContainer}>
                            Stay up-to-date with company announcements and updates to our API
                            <input type="checkbox" checked={receiveCompanyAnnouncements} onChange={() => setReceiveCompanyAnnouncements(!receiveCompanyAnnouncements)} />
                            <span className={classes.checkMark}></span>
                        </label>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <button className='secondary-button-dark' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <div className={classes.clients}>
                <h2>Join the thousands of innovators already building with us</h2>
                <ClientsLogo color='blue' />
            </div>
        </div>
    );
};

export default Contact;