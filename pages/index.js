import Link from 'next/link'
import Image from 'next/image'

export default function Home( {posts} ){

  return(
    <div>
      <h1>Hello From The Home Page!</h1>
      <section id="proyectos">
        <div className="contenedor">
          <div className="grilla" >
          {
            posts.nodes.map(post => {
              return(
          
                <div className="proyecto web" data-category="web" id="proyecto-home-688" key={post.databaseId}>
                <a href={`/posts/${post.slug}`} data-tile-position="https://www.franimpo.com/wp-content/uploads/2022/07/cover-nqi-scaled.jpg">
                
        
         
         <div className={'image-container'}>
                    <Image src={post.featuredImage.node.sourceUrl} alt={post.title} className="thumbnail" layout="fill" />
                  </div>
                            <div className="info">
                                <h2>{post.title}</h2>
                                <p className="categoria"> {post.categories.nodes.name}      </p>
          
                    </div>
                </a>
            </div>
          
              )
            })
          }/</div>
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