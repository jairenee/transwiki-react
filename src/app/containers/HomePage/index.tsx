import React from 'react';
import { AuthState } from '@aws-amplify/ui-components';
import { RouteComponentProps } from '@reach/router';
//onAuthUIStateChange
//import { Helmet } from 'react-helmet-async';

interface Props extends RouteComponentProps {
  authState?: typeof AuthState;
}

export function HomePage(props: Props) {
  return (
    <>
      <h1>Home Page</h1>
      <p>Feed and the like</p>
      {/*props.authState && <p>Current status is {props.authState.SignedIn}</p>*/}
    </>
  );
}
