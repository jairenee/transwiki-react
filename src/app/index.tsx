/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from 'styled-components/macro';
import resolveConfig from 'tailwindcss/resolveConfig';
import tw, { styled, css } from 'twin.macro';
import { Router, Redirect } from '@reach/router';

import { GlobalStyle } from 'styles/global-styles';
import '../styles/index.css';

import { NavBar } from './containers/NavBar';
import { HomePage } from './containers/HomePage/Loadable';
import { GuidesPage } from './containers/GuidesPage/Loadable';
import { ProfilePage } from './containers/ProfilePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { HandleAuth } from './containers/HandleAuth';
import { Guide } from './containers/Guide';

//import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
//onAuthUIStateChange
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const { theme } = resolveConfig('./../tailwind.config.js');

export default function App() {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<any | undefined>();
  console.log(user);

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return (
    <>
      {/* prettier-ignore */}
      <Helmet
        titleTemplate="TransWiki | %s"
      >
        <meta name="description" 
        content="A user supported source of information on all things transition. Made by trans people for trans people." />
        <title>Home</title>
      </Helmet>
      <ThemeProvider {...{ theme }}>
        {/*<AmplifyAuthenticator>*/}
        <NavBar authData={authState} />
        <Wrapper>
          {authState === AuthState.SignedIn && user !== undefined ? (
            <h1>Hi, {user.attributes.preferred_username}!</h1>
          ) : (
            <h1>Hi, stranger!</h1>
          )}
          <Router>
            <HomePage path="/" />
            <GuidesPage path="/guides">
              <Guide path=":guideId" />
            </GuidesPage>
            <HandleAuth path="/login" />
            <HandleAuth path="/logout" />
            <HandleAuth path="/signup" />
            {authState === AuthState.SignedIn ? (
              <ProfilePage path="/profile" user={user} />
            ) : (
              <Redirect from="/profile" to="/login" />
            )}
            <NotFoundPage default />
          </Router>
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

const Wrapper = styled.div(() => [tw`p-8`]);
