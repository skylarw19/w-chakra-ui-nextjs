import {
    Button,
    Text,
    Flex,
  } from '@chakra-ui/core'
  
import React, {useState} from 'react'
import { Container } from '../../components/Container'
import Link from 'next/link'

const PastSearchItem = (props) => {
    return (  
        <Container>
            <p>hello</p>
            <Flex>
                <Button variantColor="yellow"> 
                    <Link href="/"><a>Back to Home</a></Link>
                </Button>
                <Button variantColor="blue"> 
                    <Link href="/searchHistory/"><a>Back to Search History</a></Link>
                </Button>
            </Flex>
        </Container>
    );
}
 
export default PastSearchItem;