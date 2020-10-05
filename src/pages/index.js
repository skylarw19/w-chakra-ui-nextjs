import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Input,
  FormControl,
  Button
} from '@chakra-ui/core'

import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { Container } from '../components/Container'

const Index = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("")

  //handle form functions
  const handleChange = e => setInputText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText)
    router.push({
      pathname: '/api/search',
      query: {inputText}
    })
  }  

  return(
    <Container>

      <form onSubmit={handleSubmit}>
        <Input 
          value={inputText}
          onChange={handleChange}
          placeholder="search for a show"
        />
        <Button type="submit">Search</Button>
      </form>

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
