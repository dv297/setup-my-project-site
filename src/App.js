import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Security, SecureRoute } from '@okta/okta-react';

import ConfigurationPage from './pages/ConfigurationPage';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import AuthCachedPage from './pages/AuthCachedPage';

function App() {
  return (
    <BrowserRouter>
      <Security
        issuer={process.env.REACT_APP_OKTA_BASE_URL + '/oauth2/default'}
        clientId="0oa1ak7u8Lrens6RX4x6"
        redirectUri={window.location.origin + '/implicit/callback'}
        pkce={true}
      >
        <div className="App">
          <AuthCachedPage>
            <Route path="/login" render={() => <Login baseUrl={process.env.REACT_APP_OKTA_BASE_URL} />} />
            <SecureRoute path="/configurations" component={ConfigurationPage} />
            <Route path="/" exact component={HomePage} />
          </AuthCachedPage>
        </div>
      </Security>
    </BrowserRouter>
  );
}

export default App;
