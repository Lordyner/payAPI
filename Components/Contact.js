import React, { useContext, useEffect, useRef, useState } from 'react';
import { getLogger } from '../Logging/log-util';
import classes from './Contact.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import Image from 'next/image';
import ClientsLogo from './ClientsLogo';

const Contact = () => {
    const logger = getLogger('Contact');

    const form = useRef();

    const [isDisabled, setIsDisabled] = useState(false);
    const [receiveCompanyAnnouncements, setReceiveCompanyAnnouncements] = useState(false);

    const { setIsLoading } = useContext(GlobalContext);
    const { setShowPopupConfirmation } = useContext(GlobalContext);
    const { setShowPopupError } = useContext(GlobalContext);
    const { setShowPopupContactFormIncorrect } = useContext(GlobalContext);
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setIsLoading(true);
        const mail = {
            name: form.current[0].value,
            mailAdress: form.current[1].value,
            message: form.current[2].value,
        }
        if (!mail.name || mail.name === ""
            || !mail.mailAdress || mail.mailAdress === "" || !mail.mailAdress.includes === "@"
            || !mail.message || mail.message === ""
        ) {
            logger.info('Formulaire envoie de mail non valide')
            setIsLoading(false);
            setShowPopupContactFormIncorrect(true);
            setIsDisabled(false);
            return;
        }
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: form.current[0].value,
                mailAdress: form.current[1].value,
                message: form.current[2].value,
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then(response => {
            if (response.status === 201) {
                setIsLoading(false);
                setShowPopupConfirmation(true);
                emptyForm();
            } else {
                setIsLoading(false);
                setShowPopupError(true);

            }
        }).finally(() => setIsDisabled(false))
    }

    const emptyForm = () => {
        form.current[0].value = "";
        form.current[1].value = "";
        form.current[2].value = "";
    }

    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1>Submit a help request and we’ll get in touch shortly.</h1>
                <form ref={form} className={classes.form}>
                    <div className={classes.fieldsWrapper}>
                        <div className={classes.formGroup}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' placeholder='Name' required />
                            {/* <div className={classes.errorMessage}></div> */}
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