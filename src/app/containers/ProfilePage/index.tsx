/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectProfilePage } from './selectors';
import { profilePageSaga } from './saga';

import { withAuthenticator } from 'aws-amplify-react';

interface Props {}

function ProfilePage(props: Props) {
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
      <Div>{t('')}</Div>
    </>
  );
}

export default withAuthenticator(ProfilePage);

const Div = styled.div``;
