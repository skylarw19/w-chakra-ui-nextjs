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

const Index = () => {
  
  const [inputText, setInputText] = useState("")
  const [results, setResults] = useState([])
  const [search, setSearch] = useState(false)

  //handle form functions
  const handleChange = e => {setInputText(e.target.value)}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResult = await fetch(`/api/search?q=${inputText}`)
    const data = await apiResult.json();
    setResults(data.shows);
    setSearch(true)
    console.log(data.shows)
  }  

  return(
    <Container>
      <form onSubmit={handleSubmit}>
        <Flex m="10px">
          <Input m="10px"
            value={inputText}
            onChange={handleChange}
            placeholder="search for a show"
          />
          <Button type="submit" variantColor="teal" m="10px">Search</Button>
        </Flex>
      </form>

      {search && !results.length ?
        <Text>No shows found</Text>
      :
      <>
        {results.map(result =>
          <Box border="1px" borderColor="gray.700" bg="gray.100" rounded="lg" m="10px">
            <Flex>
                 <Image d="flex" src={result.image} h="150px" w="auto" m="5px" />
                 <Box>
                   <Flex>
                    <Text m="1" >{result.seriesName} </Text>
                    <Badge 
                      rounded="full" 
                      variantColor="teal" 
                      textTransform="uppercase"
                      m="1"
                      p="1"
                    >
                      {result.network} 
                    </Badge>
                   </Flex>
                  <Text m="1">{result.overview}</Text>
                  <Flex wrap="wrap">
                    {result.servicePlans.map(servicePlan =>
                      <Badge 
                        rounded="full" 
                        variantColor="teal" 
                        textTransform="uppercase"
                        m="1"
                        p="1"
                      > 
                        {servicePlan.name} 
                      </Badge>  
                    )}
                  </Flex>
                 </Box>
            </Flex>
          </Box>
        )}
      </>
      }

    </Container>
  )
}

export default Index




    {/* <Hero />
    <Main>
      
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <Icon name="external-link" mx="2px" />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <Icon name="external-link" mx="2px" />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA /> */}
