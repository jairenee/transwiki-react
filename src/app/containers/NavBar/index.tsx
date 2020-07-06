/**
 *
 * NavBar
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from '@reach/router';
import { AuthState } from '@aws-amplify/ui-components';

interface Props {
  authData?: any;
}

export function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  /* prettier-ignore */
  return (
    <>
      <Div>
        <h1>TransWiki</h1>

        <Link to="/">Home</Link>{" | "}
        <Link to="/guides">Guides</Link>{" | "}
        <Link to="/profile">Profile</Link>{" | "}
        { !(props.authData === AuthState.SignedIn) ? 
          <Link to="/login">Login</Link> : 
          <Link to="/logout">Logout</Link>}
      </Div>
    </>
  );
}

const Div = styled.main.attrs({
  className: 'justify-left',
})`
  a {
    font-weight: bold;
    text-decoration: none;
    color: #d84797;
  }
  a.visited {
    color: #d84797;
  }
  ${tw`text-center`};
  width: 100%;
  background-color: #3abeff;
  padding: 1em;
`;
