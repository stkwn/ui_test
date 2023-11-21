import styled from "styled-components";

const Input = styled.input`
    border:none;
    border-bottom: 1px solid var(--color-grey-300);
    padding: 0.8rem 0 0.8rem 0rem;
    font-size: var(--fs-md);
    font-weight:400;
    width: ${props => props.width || "100%"};
    &:focus {
        outline: none;
        border: 1px solid var(--color-green-500);
    }
`
const Label = styled.label`
    font-size: var(--fs-sm);
    font-weight: 400;
`

export { Label, Input }

