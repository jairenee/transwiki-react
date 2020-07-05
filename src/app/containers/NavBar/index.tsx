/**
 *
 * NavBar
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {}

export function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  /* prettier-ignore */
  return (
    <>
      <Div>
        <Link to="/">Home</Link>{" "}
        <Link to="/guides">Guides</Link>{" "}
        <Link to="/profile">Profile</Link>
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100%;
  height: 3em;
  color: blue;
`;
