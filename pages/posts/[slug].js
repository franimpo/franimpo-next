import Image from 'next/image'

export default function Post( data ){

    const post = data.post;

    return (
        <main>
           <article className='post-260 post type-post status-publish format-standard has-post-thumbnail hentry category-web'>
           <div className="header-post ">
        <div className="contenedor ">
            <div className="top">
        <p className="categoria">
        {post.category}</p>
       <h1>{post.title}</h1>
        </div>
                <div className="bottom">
            <div className="descripcion">
                
                {post.excerpt}              
               
            </div>
            <div className=" ficha">
            {
            post.proyecto.ficha.map(item => {
                <div className="item">
                <p className="titulo">{item.fichaTit}</p>
                <p className="contenido">{item.fichaTxt}</p>
                </div>
})
}
                            </div>
                            <a href={post.proyecto.proyLink} className="main-cta" target="_blank" rel="noreferrer"><span>Ver Sitio Web</span></a> 

        </div>
          </div>
                </div>
             
               <article dangerouslySetInnerHTML={{__html: post.content}}></article>
           </article>
        </main>
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
                posts {
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