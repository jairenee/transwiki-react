/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { GuidesPage } from './containers/GuidesPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import ProfilePage from './containers/ProfilePage/';
import { NavBar } from './containers/NavBar/';

export default function App() {
  return (
    <BrowserRouter>
      {/* prettier-ignore */}
      <Helmet
        titleTemplate="%s - TransWiki"
        defaultTitle="Home Page"
      >
        <meta name="description" 
        content="A user supported source of information on all things transition. Made by trans people for trans people." />
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/guides" component={GuidesPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
