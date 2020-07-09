/**
 *
 * HandleAuth
 *
 */

import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
//import styled from 'styled-components/macro';
//import { AuthState } from '@aws-amplify/ui-components';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectHandleAuth } from './selectors';
import { handleAuthSaga } from './saga';
import { RouteComponentProps } from '@reach/router';
import {
  AmplifySignUp,
  AmplifySignIn,
  AmplifyAuthenticator,
} from '@aws-amplify/ui-react';

interface Props extends RouteComponentProps {
  children: ReactNode;
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
              placeholder: 'MM/DD/YYYY (this cannot be changed later)',
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
            {
              type: 'custom:pronouns',
              label: 'Pronouns (optional)',
              placeholder: 'she/ze/his',
              required: false,
            },
          ]}
        ></AmplifySignUp>
        <AmplifySignIn slot="sign-in" usernameAlias="email"></AmplifySignIn>
        {props.children}
      </AmplifyAuthenticator>
    </>
  );
}
