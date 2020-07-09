import { Hub, Auth } from 'aws-amplify';
import { deleteProfile, switchUser, updateProfile } from './actions';
import { Store } from '@reduxjs/toolkit';
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';

export class AmplifyBridge {
  store: Store;
  constructor(store: Store) {
    this.store = store;

    Hub.listen('auth', () => {
      this.checkUser();
    });
    // Add this component as a listener of auth events.

    this.checkUser(); // first check
  }

  checkUser() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.store.dispatch(switchUser(user));
        this.loadProfile(user);
      })
      .catch(err => {
        this.store.dispatch(switchUser(null));
        this.store.dispatch(deleteProfile());
      });
  }

  loadProfile(user: CognitoUser) {
    Auth.userAttributes(user)
      .then(data => {
        const profile = this.translateAttributes(data);
        this.store.dispatch(updateProfile(profile));
      })
      .catch(_err => this.store.dispatch(deleteProfile()));
  }

  translateAttributes(data: CognitoUserAttribute[]) {
    console.log(data);
    return data;
    //   email: data.email,
    //   email_verified: boolean,
    //   preferred_username: string,
    //   birthdate: string
    // };
  }
}
