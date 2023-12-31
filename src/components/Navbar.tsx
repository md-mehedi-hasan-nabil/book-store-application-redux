import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
// import { useDispatch } from "react-redux";

export default function Navbar() {
  function handleChange(value) {
    // dispatch(searchBookByKeyword(value));
  }

  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} width="150px" className="object-contain" alt="logo" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <NavLink to="/">
            <li>Book Store</li>
          </NavLink>
          <NavLink to="/wishlist">
            <li>Wishlist</li>
          </NavLink>
          <NavLink to="/my-collection">
            <li>My Collection</li>
          </NavLink>
        </ul>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center"
        >
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-searchBook"
              // value={keyword}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
