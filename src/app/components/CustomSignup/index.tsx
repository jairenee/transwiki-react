/**
 *
 * CustomSignup
 *
 */
import React from 'react';
import { SignUp } from 'aws-amplify-react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();

export class CustomSignup extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ['signUp'];
  }

  showComponent(theme) {
    return (
      <div className="mx-auto w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email/Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => super.signUp()}
            >
              Login
            </button>
            <p className="text-grey-dark text-xs">
              Already Have An Account?{' '}
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState('signIn')}
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const Div = styled.div``;
