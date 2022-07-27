import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';

import "swiper/css/free-mode";

export default function Home( {posts} ){

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
      <section id="hero">
    <div className="contenedor ">
        <h1>¡Hola! Soy Francisco Impollino, diseñador gráfico especializado en desarrollo web, desde la etapa inicial hasta la puesta online. 
    </h1></div>
</section>
      <section id="proyectos">
        <div className="">
          <div className="grilla">
            <Swiper
            spaceBetween={25}
            slidesPerView={1.25}
           
            freeMode={true}
            observer={true}
            observeParents={true}
            centeredSlides={true}
            touchEventsTarget = {'container'}
            loop = {true}
            breakpoints={{
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
                autoHeight:true,
              },
            }}
                >
             {
                  posts.nodes.map(post => {
                    return(
            <SwiperSlide className='proyecto'  key={post.databaseId}>
              <a href={`/posts/${post.slug}`}  data-tile-position="https://www.franimpo.com/wp-content/uploads/2022/07/cover-nqi-scaled.jpg">
                       <div className={'image-container'}>
                                 <Image src={post.featuredImage.node.sourceUrl} alt={post.title} className="thumbnail" layout="fill" />
                               </div>
                                         <div className="info">
                                             <h2>{post.title}</h2>
                                             {post.categories.nodes.map(item => { 
return (
   
                <p className="categoria" key={item.name}>{ item.name }</p>
             


    );
})}
            
                                 </div>
                             </a>
            </SwiperSlide>
            )
                })
              }/
                </Swiper>
          </div>
        </div>
      </section>
    
  </div>
  )

}
  
export async function getStaticProps(){

  const res = await fetch('https://www.franimpo.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomePageQuery {
            posts(first: 23) {
              nodes {
                title
              
                  categories {
                    nodes {
                      name
                    }
                  
                }
                slug
                excerpt
                databaseId
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }

}