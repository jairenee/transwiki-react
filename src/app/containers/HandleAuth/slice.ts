import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the HandleAuth container
export const initialState: ContainerState = {};

const handleAuthSlice = createSlice({
  name: 'handleAuth',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = handleAuthSlice;
