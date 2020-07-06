/**
 *
 * GuidesPage
 *
 */

import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

//import { Guide } from '../Guide';
//import { Portfolio } from '../Portfolio';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGuidesPage } from './selectors';
import { guidesPageSaga } from './saga';

import { AuthState } from '@aws-amplify/ui-components';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
  authState?: typeof AuthState;
  children?: ReactNode;
}

export function GuidesPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: guidesPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const guidesPage = useSelector(selectGuidesPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Guides</title>
      </Helmet>
      <GuidesHome></GuidesHome>
      {props.children}
    </>
  );
}

export function GuidesHome() {
  return (
    <>
      <Div>
        <h1>Guides Home</h1>
        <p>This is where guides will go.</p>
      </Div>
    </>
  );
}

const Div = styled.div``;
