import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/login">
          <h1>Cadeceus Lane</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
          {user && (
            <div>
              <Link to="/books">Books</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
