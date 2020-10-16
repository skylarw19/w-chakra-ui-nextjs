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
    const data = await fetch('http://localhost:3000/api/searchHistory') 
    const searchHistory = await data.json()
    console.log(searchHistory)
    //the value of the 'props' key will be passed to the SearchHistoryIndex component
    return {
        props: searchHistory
    }
    
}
