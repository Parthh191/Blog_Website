import {Link} from "react-router-dom"

const Post = ({post}) => {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`} className="post-link" >
                <h2>{post.title}</h2>
                <p>{post.datetime}</p>
            </Link>
            <p className="Body">
                {(post.body.length <= 25) ? post.body : `${post.body.slice(0, 25)}...`}
            </p>
        </article>
    )
}
export default Post