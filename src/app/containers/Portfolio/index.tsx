/**
 *
 * Portfolio
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectPortfolio } from './selectors';
import { portfolioSaga } from './saga';
import { Helmet } from 'react-helmet-async';

interface Props {}

export const Portfolio = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: portfolioSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const portfolio = useSelector(selectPortfolio);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Div>{t('')}</Div>
    </>
  );
});

const Div = styled.div``;
