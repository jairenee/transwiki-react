/**
 *
 * GuidesPage
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Switch, Route, BrowserRouter, useRouteMatch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Guide } from '../Guide';
import { Portfolio } from '../Portfolio';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGuidesPage } from './selectors';
import { guidesPageSaga } from './saga';

interface Props {}

export function GuidesPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: guidesPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const guidesPage = useSelector(selectGuidesPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  let match = useRouteMatch();

  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Guides</title>
        </Helmet>
        <Switch>
          <Route path={`${match.path}/:guideId`} component={Guide} />
          <Route path={`${match.path}/:user`} component={Portfolio} />
          <Route path={`${match.path}`} render={GuidesHome} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

function GuidesHome() {
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
