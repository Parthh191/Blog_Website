import {Link} from "react-router-dom"

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">
            <form className="search" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Post</label>
                <input 
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li ><Link to ="/" className="nav-link">Home</Link></li>
                <li> <Link to ="/post" className="nav-link">Post</Link></li>
                <li> <Link to ="/about" className="nav-link">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav