import React from 'react'
import styled from 'styled-components'
import Text from '../UI/Text'
import { BsFillStarFill } from 'react-icons/bs'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

import Heading from '../UI/Heading';
import { Flex, FlexItem } from '../UI/Flex';

export default function LoginImage() {
  return (
    <Wrapper>
      <Flex direction="column" justify="flex-end"  padding="var(--spacing-2xl)" gap="var(--spacing-xl)">
        <Text size="xxxl" color="white">
          "Untitled truly has solved all our design and content problems, freeing up our time to work on more import things. We can't imagine working without it now."
        </Text>
        <Flex direction="column">
          <Flex justify="space-between">
              <Text size="xxl" color="white">Mischca Sullivan</Text>
              <Flex gap="var(--spacing-sm)" align="center">
                <BsFillStarFill color="white" size={18}/>
                <BsFillStarFill color="white" size={18}/>
                <BsFillStarFill color="white" size={18}/>
                <BsFillStarFill color="white" size={18}/>
                <BsFillStarFill color="white" size={18}/>
              </Flex>
          </Flex>
          <Flex justify="space-between" gap="var(--spacing-sm)">
              <Text color="white" size="lg">Bolt Agency</Text>
              <Flex gap="var(--spacing-lg)">
                <BiLeftArrowAlt color="white" size={28}/>
                <BiRightArrowAlt color="white" size={28}/>
              </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 83rem;
  height: 100%;
  background: url('login.jpg') center/cover no-repeat;
  border-top-right-radius: var(--radius-2xl);
  border-bottom-right-radius: var(--radius-2xl);
  display: flex;
`
