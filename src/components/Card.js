import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      alignItems="flex-start"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} width="100%" height="400px" objectFit="cover" borderRadius={2}/>
      <VStack alignItems="flex-start" p={4}>
        <Heading as="h3" size="md" textColor="black">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
        <a href="#">
          <HStack spacing={2}>
            <Text color="black">See More</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
          </HStack>
        </a>
      </VStack>
    </VStack>
  )
};

export default Card;
