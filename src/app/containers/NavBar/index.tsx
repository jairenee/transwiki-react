/**
 *
 * NavBar
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import tw, { styled } from 'twin.macro';
import { Link } from '@reach/router';
import { AmplifySignOut } from '@aws-amplify/ui-react';
//import { useSelector } from 'react-redux';
//import { selectAuthentication } from 'store/authentication/selectors';

interface Props {}

export function NavBar(props: Props) {
  //useSelector(state => console.log(state));
  //console.log(authentication);
  //let isAuthenticated = false;
  let profile = null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  /* prettier-ignore */
  return (
    <>
      <Div>
        <h1>TransWiki</h1>

        <Link to="/">Home</Link>{" | "}
        <Link to="/guides">Guides</Link>{" | "}
        <Link to="/profile">Profile</Link>
      </Div>
      {profile !== null ? (
            <div>
              <h1>Hi, {profile}!</h1>
              <AmplifySignOut />
            </div>
          ) : (
            <h1>Hi, stranger!</h1>
          )}
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
