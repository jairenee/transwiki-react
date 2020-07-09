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
import tw, { styled } from 'twin.macro';
import { Router } from '@reach/router';

import { GlobalStyle } from 'styles/global-styles';
import '../styles/index.css';

import { NavBar } from './containers/NavBar';
import { HomePage } from './containers/HomePage/Loadable';
import { GuidesPage } from './containers/GuidesPage/Loadable';
import { ProfilePage } from './containers/ProfilePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
//import { HandleAuth } from './containers/HandleAuth';
import { Guide } from './containers/Guide';

//import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { useSelector, useDispatch } from 'react-redux';
Amplify.configure(awsconfig);

const { theme } = resolveConfig('./../tailwind.config.js');

export default function App() {
  let heythere = useSelector(state => state);
  console.log(heythere);
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
        <NavBar />
        <Wrapper>
          <Router>
            <HomePage path="/" />
            <GuidesPage path="/guides">
              <Guide path=":guideId" />
            </GuidesPage>
            <ProfilePage path="/profile" />
            <NotFoundPage default />
          </Router>
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

const Wrapper = styled.div(() => [tw`p-8`]);
