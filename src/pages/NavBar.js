import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="App-header">
        <div className="title">
        <h1>Todd McClelland</h1>
        <p>Director Of Photography</p>
        </div>
        <ul className="navcomponents">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;