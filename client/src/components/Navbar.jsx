import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <NavLink to="/">
                {/* <img src={logo} alt="logo" /> */}
              </NavLink>
            </div>
            <div className="navbar-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/users">Users</NavLink>
              <NavLink to="/products">Products</NavLink>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar