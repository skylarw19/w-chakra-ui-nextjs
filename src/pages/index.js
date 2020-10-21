import {
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/core'

import React, {useState} from 'react'
import { Container } from '../components/Container'
import ShowCard from '../components/ShowCard'
import Link from 'next/link'

const Index = () => {
  
  const [inputText, setInputText] = useState("")
  const [results, setResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleChange = e => {setInputText(e.target.value)}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResult = await fetch(`/api/search?q=${inputText}`)
    const data = await apiResult.json();
    setResults(data.shows);
    setHasSearched(true);
  }  

  return(
    <Container>
      
      <Flex m="10px">
        <Input 
          m="10px"
          value={inputText}
          onChange={handleChange}
          placeholder="search for a show"
        />
        { inputText === null || inputText.match(/^ *$/) ? 
          <></> 
        : 
          <Button onClick={handleSubmit} variantColor="teal" m="10px">Search</Button>
        }
      </Flex>

      <Button variantColor="yellow">
        <Link href="/search-history/"><a>See Search History</a></Link>
      </Button>
      
      
      {hasSearched && !results.length ?
        <Text>No shows found</Text>
      :
        results.map(result => 
          <ShowCard
            key={result.id}
            seriesName={result.seriesName}
            overview={result.overview}
            image={result.image}
            network={result.network}
            servicePlans={result.servicePlans}  
          />      
        )
      }

    </Container>
  )
}

export default Index


   