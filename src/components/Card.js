import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = withTheme(({ title, description, imageSrc, theme }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack color="black" 
    backgroundColor={theme.colors.white} 
    borderRadius="xl">
      <Image src={imageSrc} borderRadius="xl" cursor={"pointer"}/>
        <VStack spacing={4} p={4} alignItems="flex-start">
          <HStack justifyContent="space-between" 
          alignItems="center">
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Text color={theme.colors.gray["500"]} fontSize="lg">
              {description}
            </Text>
          </HStack>
          <HStack backgroundColor={theme.colors.gray["100"]} borderRadius="xl" 
          cursor={"pointer"}>
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </HStack>
        </VStack>
    </VStack>
  );
});


export default Card;
