import styled, { css } from "styled-components";

const size = {
  sm: css`
      font-size: 1.4rem;
      line-height: 1.8rem;
    `,
  md: css`
      font-size: 1.6rem;
      line-height: 2.0rem;
    `,
  lg: css`
      font-size: 2.0rem;
      line-height: 2.8rem;;
    `,
  xl: css`
      font-size: 2.4rem;
      line-height: 3.2rem;
    `,
  xxl: css`
      font-size: 3.2rem;
      line-height: 4.8rem;
  `,
  xxxl: css`
      font-size: 3.6rem;
      line-height: 4.8rem;
  `,
}

const Text = styled.p`
    ${(props) => size[props.size]};
    font-weight: ${(props) => props.weight || 400}; 
    text-align: ${(props) => props.align || "left"};
    transform: ${(props) => props.transform || "none"};
    color:${props => `var(--color-brand-${props.color})`};    
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0}; 

   & > span {
    font-weight:400
   }
`

export default Text