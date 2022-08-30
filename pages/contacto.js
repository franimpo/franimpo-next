import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import ContactForm from '../components/Contact';

export default function Contacto( {} ){

  function validateFormWithJS() {
    const name = document.querySelector('#name').value
    const rollNumber = document.querySelector('#rollNumber').value

    if (!name) {
      alert('Please enter your name.')
      return false
    }

    if (rollNumber.length < 3) {
      alert('Roll Number should be at least 3 digits long.')
      return false
    }
  }
  return(
    
    <div>
       <Head>
        <title>Francisco Impollino &#x2d; Diseñador Gráfico y Desarrollador Web | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

<meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />
<meta name="description" content="¡Hola! Soy Francisco, diseñador gráfico recibido en la Universidad de Buenos Aires." />
<meta property="og:image" content="https://www.franimpo.com/wp-content/uploads/2020/06/index.jpg" />
<meta property="og:image:width" content="1022" />
<meta property="og:image:height" content="571" />
<meta property="og:locale" content="es_CL" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Francisco Impollino &#x2d; Diseñador Gráfico y Web | Portfolio" />
<meta property="og:description" content="¡Hola! Soy Francisco, diseñador gráfico recibido en la Universidad de Buenos Aires." />
<meta property="og:url" content="https://www.franimpo.com/" />
<meta property="og:site_name" content="Francisco Impollino" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Francisco Impollino &#x2d; Diseñador Gráfico y Web | Portfolio" />
<meta name="twitter:description" content="¡Hola! Soy Francisco, diseñador gráfico recibido en la Universidad de Buenos Aires." />
<meta name="twitter:image" content="https://www.franimpo.com/wp-content/uploads/2020/06/index.jpg" />
<meta name="twitter:image:width" content="1022" />
<meta name="twitter:image:height" content="571" />
<link rel="canonical" href="https://www.franimpo.com/" />

<meta name="google-site-verification" content="7YvlD_YCUE3gSL8ncjuG3N06y0n_pHxmr5p7GDPCZqI" />


      </Head>
      <div className="contenedor">
        <div className="header-post">
                  <h1 className="">Contacto</h1>
                  </div>
      </div>
 <section>
  <div className="contenedor">
  
    <div className="acerca-contacto">
     <div id="acerca" className="col-md-6">
     <p>
                <strong>¡Hola! Soy Francisco, diseñador gráfico recibido en la Universidad de Buenos Aires.</strong> Hago diseño de marcas, editorial, algo de ilustración, y me especializo en diseño web, desde la etapa inicial de research y bocetado hasta el maquetado en HTML, CSS y JavaScript, la programación, optimización y la puesta en producción, tanto de sitios estáticos como manejados a través de un CMS (en especial WordPress).

</p>
     </div>
<div id="contacto" className="offset-md-1 col-md-5">
<ContactForm></ContactForm>
</div>
    </div>
  </div>
 
 </section>
    
  </div>
  )

}
  

