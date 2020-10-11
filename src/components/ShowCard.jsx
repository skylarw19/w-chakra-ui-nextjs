import React from 'react'
import {
    Box,
    Text,
    Image,
    Flex,
    Badge
  } from '@chakra-ui/core'

const ShowCard = ({seriesName, overview, image, network, servicePlans}) => {
    return (  
    <>
      <Box border="1px" borderColor="gray.700" bg="gray.100" rounded="lg" m="10px" w="95%">
        <Flex>
          <Image d="flex" src={image} h="150px" w="auto" m="5px" />
          <Box>
            <Flex>
              <Text m="1" >{seriesName} </Text>
              <Badge 
                rounded="full" 
                variantColor="teal" 
                textTransform="uppercase"
                m="1"
                p="1"
              >
                {network} 
              </Badge>
            </Flex>
            <Text m="1">{overview}</Text>
            <Flex wrap="wrap">
              {servicePlans.map(servicePlan =>
                <Badge
                  key={servicePlan.id} 
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
    </>
    );
}
 
export default ShowCard;