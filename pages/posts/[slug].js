import Image from 'next/image'
import Head from 'next/head';
export default function Post( data ){

    const post = data.post;
    const linkWeb = post.proyecto.proyLink
    const contenido = post.content
    return (
      <><Head>
        <title>{post.title} Francisco Impollino &#x2d; Diseñador Gráfico y Desarrollador Web | Portfolio</title>
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


      </Head><main>
          <article className='post-260 post type-post status-publish format-standard has-post-thumbnail hentry category-web'>
            <div className="header-post ">
              <div className="contenedor ">
                <div className="top">
                  {post.categories.nodes.map(item => {

                    return (

                      <p className="categoria" key={item.name}>{item.name}</p>



                    );
                  })}
                  <h1>{post.title}</h1>
                </div>
                <div className="bottom">
                  <div className="descripcion" dangerouslySetInnerHTML={{ __html: post.excerpt }}>



                  </div>
                  <div className="ficha">

                    {post.proyecto.ficha.map(item => {
                      if (item) {
                        return (

                          <div className="item" key={item.fichaTxt}>
                            <p className="titulo">{item.fichaTit}</p>
                            <p className="contenido">{item.fichaTxt}</p>
                          </div>


                        );
                      }
                    })}



                    {linkWeb ? `<a href=${post.proyecto.proyLink} className="main-cta" target="_blank" rel="noreferrer"><span>Ver Sitio Web</span></a>` : ''}
                  </div>
                </div>
              </div>
            </div>

            {contenido ? <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.content }}></div> : ''}
          </article>
        </main></>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('https://www.franimpo.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
              
                  categories {
                    nodes {
                      name
                    }
                  
                }
                slug
                excerpt
                proyecto {
                    descripcion
                    ficha {
                      fichaTit
                      fichaTxt
                    }
                    proyLink
                  }
                databaseId
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()
// console.log(post.proyecto.ficha)
    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('https://www.franimpo.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
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
                proyecto {
                    descripcion
                    ficha {
                      fichaTit
                      fichaTxt
                    }
                    proyLink
                  }
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
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}