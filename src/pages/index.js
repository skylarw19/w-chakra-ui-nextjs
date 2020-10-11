import {
  Input,
  Button,
  Box,
  Text,
  Image,
  Flex,
  Badge
} from '@chakra-ui/core'

import React, {useState} from 'react'
import { Container } from '../components/Container'
import ShowCard from '../components/ShowCard'

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
      <form onSubmit={handleSubmit} >
        <Flex m="10px">
          <Input m="10px"
            value={inputText}
            onChange={handleChange}
            placeholder="search for a show"
          />
          { inputText === null || inputText.match(/^ *$/) ? 
            <></> 
          : 
            <Button type="submit" variantColor="teal" m="10px">Search</Button>
          }
        </Flex>
      </form>

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


   