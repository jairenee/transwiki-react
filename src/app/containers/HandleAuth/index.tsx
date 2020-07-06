/**
 *
 * HandleAuth
 *
 */

import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
//import styled from 'styled-components/macro';
import { AuthState } from '@aws-amplify/ui-components';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectHandleAuth } from './selectors';
import { handleAuthSaga } from './saga';
import { RouteComponentProps } from '@reach/router';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
} from '@aws-amplify/ui-react';

interface Props extends RouteComponentProps {
  authState?: AuthState;
  slot?: string;
  children?: ReactNode;
}

export function HandleAuth(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: handleAuthSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAuth = useSelector(selectHandleAuth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'preferred_username',
              label: 'Display Name',
              placeholder: 'Valid Person',
              required: true,
            },
            {
              type: 'birthdate',
              label: 'Birthday',
              required: true,
            },
            {
              type: 'email',
              label: 'Email',
              placeholder: 'e.g. valid@transwiki.net',
              required: true,
            },
            {
              type: 'password',
              label: 'Password',
              placeholder: 'Password',
              required: true,
            },
          ]}
        ></AmplifySignUp>
        <AmplifySignIn slot="sign-in" usernameAlias="email"></AmplifySignIn>
        <AmplifySignOut slot="sign-out"></AmplifySignOut>
      </AmplifyAuthenticator>
    </>
  );
}
