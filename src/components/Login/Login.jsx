import React from 'react';
import styled from 'styled-components';
import LoginCard from './LoginCard';
import LoginImage from './LoginImage';

export default function Login() {
  return (
    <LoginWrapper>
      <LoginCard />
      <LoginImage />
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  width: 144rem;
  height: 100rem;
  background-color: var(--color-brand-white);
  border-radius: var(--radius-2xl);
  display: flex;
`