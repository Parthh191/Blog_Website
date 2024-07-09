import './App.css';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Footer from './Footer';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import{format} from 'date-fns'
import api from './api/posts'

function App() {
  const [search, setSearch] = useState(" ");
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResults] = useState([]);
  const [postTitle,setPostTitle]=useState('')
  const [postBody,setPostBody]=useState('')
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts'); // Update endpoint path
        setPosts(response.data);
      } catch (err) {
        console.error(`Error: ${err.message}`);
      }
    };
    fetchPosts();
    }, []
  );
  useEffect(() => {
    
      const filteredResult = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filteredResult.reverse());
    
  }, [posts, search]);
  const handleDelete = async(id) => {
    try{
      await api.delete(`/posts/${id}`);
      const listItems=posts.filter(post=>post.id!==id)
      setPosts(listItems);
    }
    catch(err){
      console.log(err.message)
    }
    navigate('/', { replace: true });
  };
  const handleSubmitNewPost=async(e)=>{
    e.preventDefault()
    const id=posts.length?posts[posts.length-1].id+1:1
    const datetime=format(new Date(),"MMMM dd ,yyyy pp")
    const newPost={id,title:postTitle,datetime,body:postBody}
    try{
      const reponse=await api.post('/posts',newPost);
      const allPost=[...posts,reponse.data]
      setPosts(allPost)
      setPostTitle('')
      setPostBody('')
      navigate('/', { replace: true })
  }
  catch(err){
    console.log(err.message)
  }
    }

  return (
    <div className='App'>
      <Header className="Peader" />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home posts={searchResult.length ? searchResult : posts} className="Home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<NewPost handleSubmitNewPost={handleSubmitNewPost} postBody={postBody} setPostBody={setPostBody} postTitle={postTitle} setPostTitle={setPostTitle}  />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;