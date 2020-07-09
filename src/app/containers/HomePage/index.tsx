import React from 'react';
import { RouteComponentProps } from '@reach/router';
// import { useSelector } from 'react-redux';
// import { selectAuthentication } from 'store/authentication/selectors';
//onAuthUIStateChange
//import { Helmet } from 'react-helmet-async';

interface Props extends RouteComponentProps {}

export function HomePage(props: Props) {
  //const { isAuthenticated } = useSelector(selectAuthentication);
  return (
    <>
      <h1>Home Page</h1>
      <p>Feed and the like</p>
      <p>authenticated?</p>
    </>
  );
}
