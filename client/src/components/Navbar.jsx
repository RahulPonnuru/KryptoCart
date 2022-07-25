import logo from '../../images/Logo.png';

const Navbar=()=>{
    return(
        <nav>
            <div className='nav'>
                <img className='logo' src={logo} alt="KryptoCart"></img>
                <ul className='unOrdered'>
                    <li>Our Services</li>
                    <li>My Products</li>
                    <li>Admin Login</li>                 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;