import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="App-header">
        <div className="title">
        <h1 className="header">Todd McClelland</h1>
        <p className="subtitle">Director Of Photography</p>
        
        <ul className="navcomponents">
          <li className="ul">
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
            <Link to="/Contact">Contact</Link>
          <li>
            
          </li>
        </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;