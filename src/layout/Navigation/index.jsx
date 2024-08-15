import { NavLink, Outlet } from "react-router-dom"
import "./Navigation.css"

export default function Navigation() {
  return (
    <>
        <nav className="navigation">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dogs">Dogs</NavLink>
              <NavLink to="/search">Search Dogs</NavLink>
              <NavLink to="/newdog">Add Breed</NavLink>
              <NavLink to="/updatedog">Update Breed</NavLink>
              <NavLink to="/deletedog">Delete Breed</NavLink>
        </nav>
    
        <Outlet />
    </>
  )
}
