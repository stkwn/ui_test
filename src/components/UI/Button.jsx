import React from "react"
import styled, { css } from "styled-components"

const size = {
  sm: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    border-radius: var(--radius-sm);
  `,
  md: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    text-transform: capitalize;
    font-weight: 500;
    text-align: center;
  `,
  lg: css`
    font-size: 1.6rem;
    padding: 1.4rem 2.4rem;
    text-transform: capitalize;
    font-weight: 500;
    text-align: center;
  `,
}

const variant = {
  brand: css`
    color: var(--color-brand-white);
    background-color: var(--color-${props => props.colorTheme}-500);
    border: 1px solid var(--color-${props => props.colorTheme}-500);
    &:hover {
      background-color: var(--color-${props => props.colorTheme}-700);
      border: 1px solid var(--color-${props => props.colorTheme}-700);
    }
  `,
  solid: css`
    color: var(--color-${props => props.colorTheme}-700);
    background-color: var(--color-${props => props.colorTheme}-300);
    border: 1px solid var(--color-${props => props.colorTheme}-300);
    &:hover {
      background-color: var(--color-${props => props.colorTheme}-100);
      border: 1px solid var(--color-${props => props.colorTheme}-100);
    }
  `,
  outline: css`
    color: var(--color-${props => props.colorTheme}-500);
    background-color: var(--color-brand-white);
    border: 1px solid var(--color-${props => props.colorTheme}-500);
    &:hover {
      background-color: var(--color-${props => props.colorTheme}-300);
      color: var(--color-${props => props.colorTheme}-500);
    }
  `,
  ghost: css`
    color: var(--color-${props => props.colorTheme}-700);
    background-color: transparent;
    border: 1px solid transparent;
    &:hover {
      background-color: var(--color-${props => props.colorTheme}-500) !important;
      color: var(--color-brand-white) !important;
    }
  `,
}

const Button = styled.button`
  border-radius: var(--radius-md);
  ${props => size[props.size]}
  ${props => variant[props.variant]}
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & > span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  & > svg {
    margin-left: 0.4rem;
  }
`

Button.defaultProps = {
  variant: "solid",
  size: "md",
  colorTheme: "green",
}

export default Button
