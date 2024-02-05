import Image from 'next/image';
import React from 'react';
import classes from './ClientsLogo.module.css';
import teslaLogo from '@/public/images/shared/desktop/tesla.svg';
import microsoftLogo from '@/public/images/shared/desktop/microsoft.svg';
import hewlettPackardLogo from '@/public/images/shared/desktop/hewlett-packard.svg';
import oracleLogo from '@/public/images/shared/desktop/oracle.svg';
import googleLogo from '@/public/images/shared/desktop/google.svg';
import nvidiaLogo from '@/public/images/shared/desktop/nvidia.svg';
import teslaLogoBlue from '@/public/images/shared/desktop/tesla_blue.svg';
import microsoftLogoBlue from '@/public/images/shared/desktop/microsoft_blue.svg';
import hewlettPackardLogoBlue from '@/public/images/shared/desktop/hewlett-packard_blue.svg';
import oracleLogoBlue from '@/public/images/shared/desktop/oracle_blue.svg';
import googleLogoBlue from '@/public/images/shared/desktop/google_blue.svg';
import nvidiaLogoBlue from '@/public/images/shared/desktop/nvidia_blue.svg';

const ClientsLogo = ({ color }) => {
    return (<>
        {color === 'blue' &&
            <div className={classes.clientsLogoWrapper}>

                <Image src={teslaLogoBlue} alt='tesla logo' />
                <Image src={microsoftLogoBlue} alt='microsoft logo' />
                <Image src={hewlettPackardLogoBlue} alt='hewlett packard logo' />
                <Image src={oracleLogoBlue} alt='oracle logo' />
                <Image src={googleLogoBlue} alt='google logo' />
                <Image src={nvidiaLogoBlue} alt='nvidia logo' />
            </div>
        }
        {color !== 'blue' &&
            <div className={classes.clientsLogoWrapper}>
                <Image src={teslaLogo} alt='tesla logo' />
                <Image src={microsoftLogo} alt='microsoft logo' />
                <Image src={hewlettPackardLogo} alt='hewlett packard logo' />
                <Image src={oracleLogo} alt='oracle logo' />
                <Image src={googleLogo} alt='google logo' />
                <Image src={nvidiaLogo} alt='nvidia logo' />
            </div>
        }
    </>
    );
};

export default ClientsLogo;