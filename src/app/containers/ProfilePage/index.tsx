/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
//import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectProfilePage } from './selectors';
import { profilePageSaga } from './saga';
//import { Auth } from 'aws-amplify';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import { Helmet } from 'react-helmet-async';

import { RouteComponentProps } from '@reach/router';
import { HandleAuth } from '../HandleAuth';

interface Props extends RouteComponentProps {}

export default function ProfilePage(props: Props) {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<any | undefined>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profilePageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const profilePage = useSelector(selectProfilePage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  console.log(authState);
  console.log(user);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <HandleAuth>
        {user ? (
          <div>
            <p>Username: {user.attributes.preferred_username}</p>
            <p>Birthday: {user.attributes.birthdate}</p>
            <p>Email: {user.attributes.email}</p>
            {Object.keys(user.attributes).map((keyName, i) => (
              <p>
                {keyName}: {user.attributes[keyName].toString()}
              </p>
            ))}
          </div>
        ) : (
          <p>Please Log in</p>
        )}
      </HandleAuth>
    </>
  );
}
