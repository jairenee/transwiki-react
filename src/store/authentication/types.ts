import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';

// export interface Profile {
//   sub: string;
//   email: string;
//   email_verified: boolean;
//   preferred_username: string;
//   birthdate: string;
// }

export interface AuthState {
  profile: CognitoUserAttribute[] | null;
  user: CognitoUser | null;
  isAuthenticated: boolean;
}

export type ContainerState = AuthState;
