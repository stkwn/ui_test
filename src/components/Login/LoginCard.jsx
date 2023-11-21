import React from 'react'
import styled from 'styled-components'
import Text from '../UI/Text'
import {Flex} from '../UI/Flex'
import { Input } from '../UI/Input'
import Button  from '../UI/Button'

export default function LoginCard() {
  return (
    <Wrapper>
      <Flex direction="column" gap="var(--spacing-2xl)">
        <Flex direction="column" gap="var(--spacing-sm)">
          <Text color="black" size="xxl">Welcome back</Text>
          <Text color="grey" size="md">Welcome back!Please enter your details</Text>
        </Flex>

        <form>
          <Flex direction="column" gap="var(--spacing-lg)">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button variant="solid">Sign in</Button>
        </Flex>
        </form>
          <Button>Sign in with Google</Button>
      </Flex>


        
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 61rem;
  height: 100%;
  padding: 0 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
