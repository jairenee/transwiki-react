/**
 *
 * CustomSignin
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

interface Props {}

export function CustomSignin(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Div>{t('')}</Div>;
}

const Div = styled.div``;
