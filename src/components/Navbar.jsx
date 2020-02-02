import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SetUpMyProjectIcon = () => (
  <svg
    className="fill-current h-10 w-8 mr-4"
    width="52"
    height="52"
    viewBox="-2 0 54 54"
    xmlns="http://www.w1.org/2000/svg"
  >
    <path d="M11.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
  </svg>
);

const NavbarButton = ({ children, onClick }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

const Navbar = (props) => {
  const { user, onLogout, isLoading } = props;
  const history = useHistory();

  const onLogin = () => {
    history.push('/login');
  };

  const isThereAUserToDisplay = user != null;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-pink-800 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <SetUpMyProjectIcon />
        {isThereAUserToDisplay && (
          <span>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/configurations" className="mr-4">
              Configurations
            </Link>
          </span>
        )}
      </div>
      {!isLoading && (
        <div className="block">
          {isThereAUserToDisplay && <h1 className="text-white text-lg inline mr-8">{user.name}</h1>}
          {isThereAUserToDisplay ? (
            <NavbarButton onClick={onLogout}>Logout</NavbarButton>
          ) : (
            <NavbarButton onClick={onLogin}>Login</NavbarButton>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
