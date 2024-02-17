import React from 'react';
import classes from './Pricing.module.css';
import PricePlan from './PricePlan';

const Pricing = () => {

    let freeOptions = [{ name: 'Transactions', active: true }, { name: 'Auth', active: true }, { name: 'Identity', active: true }, { name: 'Investments', active: false }, { name: 'Assets', active: false }, { name: 'Liabilities', active: false }, { name: 'Income', active: false }]
    let basicOptions = [{ name: 'Transactions', active: true }, { name: 'Auth', active: true }, { name: 'Identity', active: true }, { name: 'Investments', active: true }, { name: 'Assets', active: true }, { name: 'Liabilities', active: false }, { name: 'Income', active: false }]
    let premiumOptions = [{ name: 'Transactions', active: true }, { name: 'Auth', active: true }, { name: 'Identity', active: true }, { name: 'Investments', active: true }, { name: 'Assets', active: true }, { name: 'Liabilities', active: true }, { name: 'Income', active: true }]

    return (
        <section className={`${classes.pricingSection} max-width`}>

            <h1>Pricing</h1>
            <div className={classes.planContainer}>
                <PricePlan name='Free Plan' description='Build and test using our core set of products with up to 100 API requests' price='0.00' options={freeOptions} />
                <PricePlan name='Basic Plan' description='Launch your project with unlimited requests and no contractual minimums ' price='249.00' options={basicOptions} />
                <PricePlan name='Premium Plan' description='Get tailored solutions, volume pricing, and dedicated support for your team ' price='499.00' options={premiumOptions} />
            </div>
        </section>
    );
};

export default Pricing;