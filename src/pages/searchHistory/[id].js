import {
    Button,
    Text,
    Flex,
  } from '@chakra-ui/core'
  
import React, {useState} from 'react'
import { Container } from '../../components/Container'
import Link from 'next/link'

export default function PastSearchItem(props) {
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
            <p>{props.item._id}</p>
            <p>{props.item.seriesName}</p>
        </Container>
    );
}
 
export async function getStaticPaths() {
    //return a list of possible values for id
    //get external data from db
    const data = await fetch('http://localhost:3000/api/searchHistory') //had to do absolute url instead of /api/searchHistory - otherwise error of "Only Absolute URLs are supported"
    const dataJson = await data.json()
    //the value of the 'props' key will be passed to the SearchHistoryIndex component
    // return {
    //     props: searchHistory
    // }

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    // the arr of possible values for 'id' must be the value for the 'paths' key of the returned obj
    const paths = dataJson.searchHistory.map(historyItem => {
        return {
            params: {
                id: historyItem._id
            }
        }
    })

    return {
        paths,
        fallback: false
    }
    
}

export async function getStaticProps({params}) {
    // fetches necessary data for the show using params.id - use 'id' b/c file name is [id].js
    //get external data from db
    const data = await fetch(`http://localhost:3000/api/searchHistory`) //had to do absolute url instead of /api/searchHistory - otherwise error of "Only Absolute URLs are supported"
    const dataJson = await data.json()

    const item = dataJson.searchHistory.find(el => el._id === params.id)
    console.log('item')
    console.log(item)
    //the value of the 'props' key will be passed to the SearchHistoryIndex component
    return {
        props: {item}
    }
}