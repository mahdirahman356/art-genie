import "../../style.css"
import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import profile from "../../assets/image/user.avif"
const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext)
  let handleLogOut = () => {
    userLogOut()
      .then(() => {
        console.log("user Log out")
      })
      .catch((error) => {
        console.log(error)
      });

  }

  return (
    <div className="bg-base-100 w-[95%] md:w-[85%] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className=" text-xl">
            <img className="w-20 h-14 " src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 btn-text">
            <Link to="/">Home</Link>
            <Link to="/generate-painting">Generate-Painting</Link>
          </ul>
        </div>
        <div className="navbar-end">
          {user
            ?
            <div className="flex items-center">
              <div className=" rounded-full mt-2">
                <img className="w-10 h-10 mr-2 border rounded-full" src={user.photoURL ? user.photoURL : profile} alt="" />
              </div>
              <a onClick={handleLogOut} className="cartoon-button-2 text-sm bg-orange-500 text-white py-2 px-4  font-bold rounded-3xl">
                Log Out
              </a>
            </div>
            : <a className="cartoon-button-2 bg-orange-500 text-white py-2 px-4  font-bold rounded-3xl">
              <Link to="/login">Login</Link>
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;