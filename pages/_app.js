import '/css/estilos-franimpo.css'
import Head from "next/head";
import Script from "next/script"

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const gAnalytics = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-44L01QM2S7"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-44L01QM2S7');
  </script>
  `;
  return (
    <>
    <Head>  
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  

   

    </Head>
      
    <Script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"/>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
    );
  }
export default MyApp
