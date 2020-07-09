import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { ContainerState } from './types';

// The initial state of the Authentication container
export const initialState: ContainerState = {
  isAuthenticated: false,
  user: null,
  profile: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    switchUser(state, action: PayloadAction<CognitoUser | null>) {
      console.log(typeof action.payload);
      state.user = action.payload || null;
      state.isAuthenticated = action.payload !== null;
    },
    updateProfile(state, action: PayloadAction<CognitoUserAttribute[]>) {
      state.profile = action.payload;
    },
    deleteProfile(state) {
      state.profile = null;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authenticationSlice;
