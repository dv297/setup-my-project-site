import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import PlaceholderPage from './PlaceholderPage';
import Navbar from '../components/Navbar';
import ImplicitCallback from '../components/ImplicitCallback';

const Authentication = React.createContext(null);

const AuthCachedPage = (props) => {
  const { authService, authState } = useOktaAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onLogout = () => {
    authService.logout('/');
    setUser(null);
  };

  useEffect(() => {
    setIsLoading(true);
    authService.getUser().then((currentUser) => {
      setIsLoading(false);
      setUser(currentUser);
    });
  }, [setIsLoading, authService, setUser]);

  const contextValue = {
    user,
  };

  if (isLoading) {
    return <PlaceholderPage />;
  }

  return (
    <>
      <Authentication.Provider value={contextValue}>
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <Navbar user={user} isLoading={authState.isPending} onLogout={onLogout} />
        {props.children}
      </Authentication.Provider>
    </>
  );
};

export default AuthCachedPage;
export { Authentication };
