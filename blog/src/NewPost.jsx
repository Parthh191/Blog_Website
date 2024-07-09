const NewPost=({handleSubmitNewPost,postBody,setPostBody,postTitle,setPostTitle})=>{
    return(
        <form className="NewPost" onSubmit={handleSubmitNewPost}>
            <p><label htmlFor="newpost">Title</label>
            <input 
            id="newpost"
            type="text"

            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)} /></p>
            <p><label htmlFor="newpostbody">Body</label>
            <textarea  id="newpostbody"
            value={postBody}
            onChange={(e)=>setPostBody(e.target.value)}
            ></textarea></p>
            <button type="submit">Submit</button>
        </form>
    )
}
export default NewPost