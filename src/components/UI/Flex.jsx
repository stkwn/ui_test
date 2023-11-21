import React from "react"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  gap: ${props => props.gap || `var(--spacing-md)`};
  flex-wrap: ${props => props.wrap || "wrap"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
`

const FlexItem = styled.div`
  flex: ${props => props.flex || "0 1 auto"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
`

const Flex = ({ direction, justify, align, gap, wrap, children, margin, padding}) => {
  return (
    <FlexContainer
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      wrap={wrap}
      margin={margin}
      padding={padding}
    >
      {children}
    </FlexContainer>
  )
}

export { Flex, FlexItem }
