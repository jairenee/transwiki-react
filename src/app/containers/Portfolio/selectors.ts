import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.portfolio || initialState;

export const selectPortfolio = createSelector(
  [selectDomain],
  portfolioState => portfolioState,
);
