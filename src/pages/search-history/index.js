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
            <Text>Your Previous Search History</Text>
            <Button variantColor="yellow"> 
                <Link href="/"><a>Home</a></Link>
            </Button>
            {props.searchHistory.map(pastSearchItem => (
                <Link
                    key={pastSearchItem._id}
                    href={`/search-history/${pastSearchItem._id}`}
                    ><a>{pastSearchItem.seriesName}</a>
                </Link>
            ))}
        </Container>
    );
}

export async function getServerSideProps(){
    //get external data from db
    const data = await fetch('http://localhost:3000/api/search-history/') //had to do absolute url instead of /api/searchHistory - otherwise error of "Only Absolute URLs are supported"
    const searchHistory = await data.json()
    //the value of the 'props' key will be passed to the SearchHistoryIndex component
    return {
        props: searchHistory
    }
    
}
