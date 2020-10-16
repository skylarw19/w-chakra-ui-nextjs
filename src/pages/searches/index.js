// have full list
import {
    Input,
    Button,
    Text,
    Flex,
  } from '@chakra-ui/core'
  
import React, {useState} from 'react'
import { Container } from '../../components/Container'
import Link from 'next/link'

const SearchHistoryIndex = () => {
    return (  
        <Container>
            <p> hello past search index pg</p>
            <Button>
                <Link href="/"><a>Back to Home</a></Link>
            </Button>
        </Container>
    );
}

export default SearchHistoryIndex;