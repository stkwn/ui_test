import styled, { css } from "styled-components"

const Heading = styled.h1`
  color: ${props => props.color || "var(--color-brand-black)"};
  ${props =>
    props.as === "h1" &&
    css`
      font-size: var(--fs-xl);
      font-weight: 700;
    `}
  ${props =>
    props.as === "h2" &&
    css`
      font-size: var(--fs-lg);
      font-weight: 700;
    `}
    ${props =>
    props.as === "h3" &&
    css`
      font-size: var(--fs-sm);
      font-weight: 700;
    `}
    ${props =>
    props.variant === "solid" &&
    css`
      background: var(--color-grey-300);
      color: var(--color-brand-black);
      padding: 0.8rem 1.6rem;
    `}
    ${props =>
    props.variant === "underline" &&
    css`
      border-bottom: 1px solid var(--color-grey-300);
      padding-bottom: 0.8rem;
    `}

    & > * {
    margin-left: 2.4rem;
  }
`

export default Heading
