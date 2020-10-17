import {
    Button,
    Text,
    Flex,
    Box,
  } from '@chakra-ui/core'
  
import React, {useState} from 'react'
import { Container } from '../../components/Container'
import Link from 'next/link'

export default function PastSearchItem({item}) {
    return (  
        <Container>
            
            <Flex>
                <Button variantColor="yellow"> 
                    <Link href="/"><a>Home</a></Link>
                </Button>
                <Button variantColor="blue"> 
                    <Link href="/searchHistory/"><a>Search History</a></Link>
                </Button>
            </Flex>
            <Box border="1px" borderColor="gray.700" bg="gray.100" rounded="lg" m="10px" w="95%" textAlign="center">
                <Text>You searched for "{item.seriesName}"</Text>
                <Text>Search Time: {item.createdAt}</Text>
                <Text>Search ID: {item._id}</Text>
            </Box>
        </Container>
    );
}

// getStaticPaths should return an array of possible values for id
export async function getStaticPaths() {   
    //get external data from db
    const data = await fetch('http://localhost:3000/api/searchHistory') //had to do absolute url instead of /api/searchHistory - otherwise error of "Only Absolute URLs are supported"
    const dataObj = await data.json()

    // the arr of possible values for 'id' must be the value for the 'paths' key of the returned obj
    // returns an array that looks like
    // [
    //     { params: { id: '5f874ecc60dbee90d7028831' } },
    //     { params: { id: '5f8911616167dcba92db090c' } },
    //   ]
    const paths = dataObj.searchHistory.map(historyItem => {
        return {
            params: {
                id: historyItem._id
            }
        }
    })
    
    //array of possible paths returned. the params are basically passed to getStaticProps
    return {
        paths,
        fallback: false
    }
    
}

export async function getStaticProps({params}) {
    // fetches necessary data for the show using params.id - use 'id' b/c file name is [id].js
    //get external data from db
    const data = await fetch(`http://localhost:3000/api/searchHistory`) //had to do absolute url instead of /api/searchHistory - otherwise error of "Only Absolute URLs are supported"
    const dataObj = await data.json()
    const item = dataObj.searchHistory.find(el => el._id === params.id)

    //the value of the 'props' key will be passed to the PastSearchItem component
    return {
        props: {item}
    }
}