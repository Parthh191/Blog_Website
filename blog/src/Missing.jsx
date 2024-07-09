import{Link} from 'react-router-dom'

const Missing =()=>{
    return(
        <div className='missing'><p>This is not a Valid Page.</p>
        <Link to={'/'} className='link-missing'>Click here to Home Page</Link>
        </div>
    )
}
export default Missing