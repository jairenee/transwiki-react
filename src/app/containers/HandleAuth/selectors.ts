import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.handleAuth || initialState;

export const selectHandleAuth = createSelector(
  [selectDomain],
  handleAuthState => handleAuthState,
);
