import Feed from './Feed'

const Home = ({posts}) => {
    return (
        <main className="Home">
            { (posts.length)?(
                    <Feed posts={posts}/>
                ):(
                    <p>There is no blog.
                        Please reload the page!
                    </p>
                )
            }
        </main>
    )
}
export default Home