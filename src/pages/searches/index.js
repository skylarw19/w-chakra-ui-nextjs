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
import SearchesMade from '../../../models/searchesMade'

export default function SearchHistoryIndex(props) {
    return (  
        <Container>
            <p> hello past search index pg</p>
            <Button varianColor="yellow"> 
                <Link href="/"><a>Back to Home</a></Link>
            </Button>
            {props.searchHistory.map(el =>
                <p>{el.seriesName}</p>
                )}
        </Container>
    );
}

export async function getStaticProps(){
    //get external data from db
    const searchHistory = await fetch('/api/searchHistory') 
    console.log(searchHistory)
    //the value of the 'props' key will be passed to the SearchHistoryIndex component
    return {
        props: searchHistory
    }
    
}
