import { Outlet, Link } from "react-router-dom";
import './snap.css'
const Layout = () => {
    return (
        <>
            <navbar>
                <div className='maindiv'>
                    <h1 className="h1">Simple Snap Shot Images</h1>
                    <hr></hr>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Nature">Nature</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/animals">Animals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Trees">Trees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Gardens">Gardens</Link>
                        </li>
                    </ul>
                </div>
            </navbar>

            <Outlet />
        </>
    )
};

export default Layout;