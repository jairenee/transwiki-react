import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.guide || initialState;

export const selectGuide = createSelector(
  [selectDomain],
  guideState => guideState,
);
