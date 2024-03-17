import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    return ( 
        <>
        <div className="navbar d-flex justify-between items-center space-x-3">
            <span>Sign up for $120 Bonus</span>
            <span>
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span>
                <button className='button-nav2'>
                    Register Now
                </button>
            </span>
        </div>
        </>
     );
}
 
export default NavBar;