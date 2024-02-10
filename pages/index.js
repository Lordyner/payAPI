import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Values from '@/Components/Values'
import Client from '@/Components/Client'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ reviews, mapBase64 }) {
  /* Logger */
  const logger = getLogger('Meeting');
  logger.debug('Home page rendered');

  /* State */
  const [screenWidth, setScreenWidth] = useState();

  /* Context */
  const { setIsMobileResolution } = useContext(GlobalContext);
  const { setIsTabletResolution } = useContext(GlobalContext);
  const { setIsLaptopResolution } = useContext(GlobalContext);
  const { setIsDesktopResolution } = useContext(GlobalContext);
  const { tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
  const { setIsLoading } = useContext(GlobalContext);
  const { isMenuOpen } = useContext(GlobalContext);

  /* Router */
  const router = useRouter();

  /* Functions */
  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);

    const isMobile = screenWidth < tabletResolution;
    const isTablet = screenWidth >= tabletResolution && screenWidth < laptopResolution;
    const isLaptop = screenWidth >= laptopResolution && screenWidth < desktopResolution;
    const isDesktop = screenWidth >= desktopResolution;

    setIsMobileResolution(isMobile);
    setIsTabletResolution(isTablet);
    setIsLaptopResolution(isLaptop);
    setIsDesktopResolution(isDesktop);
  }

  useEffect(() => {
    // Handle menu display
    handleMenuDisplay();
    window.addEventListener('resize', handleMenuDisplay);

    // Handle loading spinner
    router.events.on("routeChangeStart", () => setIsLoading(true));
    router.events.on("routeChangeComplete", () => setIsLoading(false));
    console.log()
  }, [screenWidth])


  return (
    <>
      <Head>
        <title>PayAPI</title>
        <meta name="description" content="Start building with our APIs for absolutely free" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
      <div className='d-flex f-col'>
        <div className='bg-circle-home'> </div>
        <Navbar />
        <main className='d-flex flex-grow-2'>
          <Hero />
        </main>
      </div>
      <Client />
      <Values />
      <Footer />

    </>
  )
}