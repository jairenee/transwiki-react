import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.authentication || initialState;

export const selectAuthentication = createSelector(
  [selectDomain],
  authState => authState,
);
