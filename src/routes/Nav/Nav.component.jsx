import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/crown.svg'

import './Nav.styles.scss'

const Nav = () => {

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img src={Logo} alt="logo" className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div >
            <Outlet />
        </>
    )
}

export default Nav;