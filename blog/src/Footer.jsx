const Footer =()=>{
    const datetime=(new Date().getFullYear())
    return(
        <footer><p>&copy; {datetime}
        </p>
        </footer>
    )
}
export default Footer