import React from 'react'
import {
    Input,
    Button,
    Box,
    Text,
    Image,
    Flex,
    Badge
  } from '@chakra-ui/core'

const ShowCard = ({results}) => {
    return (  
    <>
        {results.map(result =>
            <Box border="1px" borderColor="gray.700" bg="gray.100" rounded="lg" m="10px" w="95%">
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
    );
}
 
export default ShowCard;