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

import { Helmet } from 'react-helmet-async';

import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
  user: any;
}

export default function ProfilePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profilePageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const profilePage = useSelector(selectProfilePage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <p>Username: {props.user.attributes.preferred_username}</p>
      <p>Birthday: {props.user.attributes.birthdate}</p>
      <p>Email: {props.user.attributes.email}</p>
    </>
  );
}
