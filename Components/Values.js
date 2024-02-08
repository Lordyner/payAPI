import React, { useContext } from 'react';
import classes from './Values.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';

import easyToImplement from '@/public/images/home/desktop/illustration_easy_to_use.PNG';
import simpleUi from '@/public/images/home/desktop/illustration_simple_ui.png';

import iconPersonalFinances from '@/public/images/home/desktop/icon-personal-finances.svg';
import iconBankingAndCoverage from '@/public/images/home/desktop/icon-banking-and-coverage.svg';
import iconConsumerPayments from '@/public/images/home/desktop/icon-consumer-payments.svg';
import CTAReminder from './CTAReminder';

const Values = () => {

    return (
        <section className={`${classes.valueSection} max-width`}>
            <div className={classes.advantages}>
                <div className={classes.advantage}>
                    <div className={`${classes.imgWrapper} `}>
                        <Image src={easyToImplement} className={`${classes.imgAdvantages} ${classes.easyToImplementImg}`} alt='easy to implement' />
                    </div>
                    <div className={`${classes.content} ${classes.easyToImplement}`}>
                        <h2>Easy to implement</h2>
                        <p>Our API comes with just a few lines of code. You&apos;ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
                    </div>
                </div>
                <div className={`${classes.advantage} ${classes.simpleUX}`}>
                    <div className={`${classes.content} ${classes.simpleUX}`}>
                        <h2>Simple UI & UX</h2>
                        <p>Our pre-built form is easy to integrate in your app or website&mdash;no matter your tech stack. We&apos;ve focused on creating a payment checkout experience that works for every user.</p>
                    </div>
                    <div className={`${classes.imgWrapper} `}>
                        <Image src={simpleUi} className={`${classes.imgAdvantages} ${classes.simpleUXImg}`} alt='simple ui' />
                    </div>
                </div>
            </div>
            <div className={classes.values}>
                <div className={classes.value}>
                    <Image src={iconPersonalFinances} alt='icon personal finances' />
                    <h3>Personal Finances</h3>
                    <p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                </div>
                <div className={classes.value}>
                    <Image src={iconBankingAndCoverage} alt='icon banking and coverage' />
                    <h3>Banking & Coverage</h3>
                    <p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
                </div>
                <div className={classes.value}>
                    <Image src={iconConsumerPayments} alt='icon consumer payments' />
                    <h3>Consumer Payments</h3>
                    <p>It&apos;s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly verify their account.</p>
                </div>
            </div>
            <CTAReminder />
        </section>
    );
};

export default Values;